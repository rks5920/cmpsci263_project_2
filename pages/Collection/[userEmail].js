import ContentBox from "@/components/PageComponents/ContentBox"
import { useEffect, useRef, useState } from "react"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"
import ThumbNail from "@/components/PageComponents/ThumbNail"
import { useStateContext } from "@/context/StateContext"
import { useRouter } from "next/router"
import GeneralButton from "@/components/GeneralButton"
import { getUserPosts } from "@/backend/Database"


export default function Collection() {
  
  const { user, setUser } = useStateContext();
  const {prevDest, setPrev} = useStateContext();
  const router = useRouter();
  const {userEmail} = router.query;
  const postArrayRef = useRef([]);
  const [renderFlag, setRenderFlag] = useState(false);

  useEffect(() => {
    setPrev(window.location.href);
    if (userEmail){
      postArrayRef.current = [];
      getUserPostsFunc();
      }
    }, [userEmail]);

  async function getUserPostsFunc(){
    try{
      const docLst = await getUserPosts(userEmail);
      handleDocReturn(docLst);
    }
    catch(error){
      console.error("Error:", error);
      return <h1>Error collecting posts</h1>
    }
  }


  function handleDocReturn(docLst){
    console.log(docLst);
    for (let doc=0; doc<docLst.length; doc++){
      postArrayRef.current.push(<ThumbNail key={docLst[doc][0]} image={String(docLst[doc][2])} text={docLst[doc][1].title} dest={"/Post/"+String(userEmail)+"/"+docLst[doc][0]}/>);
    }
    console.log("Post Array:",postArrayRef.current);
    setRenderFlag(true);
    };
  

  return (
    <>
        <Navbar/>
        <ContentBox>
            <Header>Welcome to {userEmail} Collection</Header>
            <PostContainer>
                {postArrayRef.current}
            </PostContainer>
        </ContentBox>
        <Footer />
    </>
  )
}


const Header = styled.h1`
    padding: 20px 20px 40px 20px;
    text-align: center;
`

const PostContainer = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    gap: 10%;
    
`
