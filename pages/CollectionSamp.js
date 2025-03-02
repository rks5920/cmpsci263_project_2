import ContentBox from "@/components/PageComponents/ContentBox"
import { useEffect, useRef, useState } from "react"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"
import Hero from "@/components/PageComponents/Hero"
import ThumbNail from "@/components/PageComponents/ThumbNail"
import { useStateContext } from "@/context/StateContext"
import { useRouter } from "next/router"
import GeneralButton from "@/components/GeneralButton"
import { getUserPosts } from "@/backend/Database"
import { doc } from "firebase/firestore"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useParams } from "react-router";


export default function Collection() {
  const {userEmail} = useParams;
  const { user, setUser } = useStateContext();
  const router = useRouter();
  const postArrayRef = useRef([]);
  const [renderFlag, setRenderFlag] = useState(false);

  useEffect(() => {
      if (!user) {
        router.push('/');
      }
      else{
        postArrayRef.current = [];
        getUserPostsFunc();
      }
    });

  async function getUserPostsFunc(){
    try{
      const docLst = await getUserPosts("rks5920@psu.edu");
      handleDocReturn(docLst);
    }
    catch(error){
      console.error("Error:", error);
    }
  }


  function handleDocReturn(docLst){
    console.log(docLst);
    for (let doc=0; doc<docLst.length; doc++){
      postArrayRef.current.push(<ThumbNail image={String(docLst[doc][2])} text={docLst[doc][1].title} dest="/PostSample"/>);
    }
    console.log("Post Array:",postArrayRef.current);
    setRenderFlag(true);
    };
  

  return (
    <>
        <Navbar/>
        <ContentBox>
            <Header>Welcome to (users) Collection</Header>
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