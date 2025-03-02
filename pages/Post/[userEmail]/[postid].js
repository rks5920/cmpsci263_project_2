import ContentBox from "@/components/PageComponents/ContentBox"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { getUserPost } from "@/backend/Database"


export default function Home() {
  const router = useRouter();
  const { userEmail, postid } = router.query;
  const postArrayRef = useRef([]);
  const [renderFlag, setRenderFlag] = useState(false);
  const [title, setTitle] = useState("no title found");
  const [imgURL, setURL] = useState("");
  const [comment, setComment] = useState("no comment found");
  //const currentUrl = window.location.href;

  useEffect(() => {
    if (userEmail && postid){
      postArrayRef.current = [];
      getUserPostFunc();
      }
    }, [userEmail]);

  async function getUserPostFunc(){
    try{
      const docLst = await getUserPost(userEmail, postid);
      setTitle(docLst[0][1].title);
      setURL(docLst[0][2]);
      setComment(docLst[0][1].comment);
      //handleDocReturn(docLst);
    }
    catch(error){
      console.error("Error:", error);
    }
  }


  return (
    <>
        <Navbar/>
        <ContentBox>
            <Header>{title}</Header>
            <PostContainer>
                <ImgBorder>
                    <Image src={imgURL}></Image>
                </ImgBorder>
                <TextDiv>
                    <Text>{comment}</Text>
                </TextDiv>
                <img src={"https://api.qrserver.com/v1/create-qr-code/?data="+String(window.location.href)+"&amp;size=100x100"} alt="" title="" width="100px"/>
                
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
    flex-direction: column;
    justify-content: center;
    
`

const ImgBorder = styled.div`
    width: 70%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    border: 4px solid #ffb6c1;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 4px solid black;
        left: -8px;
        top: -8px;
        z-index: 1;
        pointer-events: none;
    }
`

const Image = styled.img`
    width: 100%;
`

const Text = styled.p`
    padding: 10px;
    font-size: 1em;
`

const TextDiv = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;

`