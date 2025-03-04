'use client'
import ContentBox from "@/components/PageComponents/ContentBox"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { getUserPost } from "@/backend/Database"
import NavButton from "@/components/Dashboard/NavButton"
import { useStateContext } from "@/context/StateContext"


export default function Home() {
  const router = useRouter();
  const {prevDest, setPrev} = useStateContext()
  const [title, setTitle] = useState("no title found");
  const [imgURL, setURL] = useState("");
  const [comment, setComment] = useState("no comment found");
  const [qrCode, setqrCode] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [postid, setPostID] = useState("");

  useEffect(() => {
    if (!router.isReady){
        return;
    } 
    const { userEmail, postid} = router.query;
    console.log(userEmail);
    console.log(postid);

    if (userEmail && postid) {
      setUserEmail(userEmail);
      setPostID(postid);
      try {
        setqrCode(window.location.href);
      } catch (error) {
        console.log('Error:', error);
      }
      getUserPostFunc(userEmail,postid);
    }
  }, [router.isReady, router.query]);


  async function getUserPostFunc(userEmail,postIDVar){
    try{
      console.log(userEmail);
      console.log(postid);
      const docLst = await getUserPost(userEmail, postIDVar);
      setTitle(docLst[0][1].title);
      setURL(docLst[0][2]);
      setComment(docLst[0][1].comment);
    }
    catch(error){
      console.error("Error:", error);
    }
  }


  return (
    <>
        <Navbar/>
        <ContentBox>
            <HeaderContainer>
                <div width={"10%"} height={"5%"}><NavButton theme={"pink"} text={"Back"} dest={prevDest}/></div>
                <Header>{title}</Header>
                <div width={"10%"} height={"5%"}><NavButton theme={"blue"} text={"Share"} dest={`https://api.qrserver.com/v1/create-qr-code/?data=${qrCode}&size=500x500`}/></div>
                {/* <div><p style={{ padding: '20px' }}>Share:</p><QRCode src={`https://api.qrserver.com/v1/create-qr-code/?data=${qrCode}&size=100x100`} alt="" title="" width="100px"/></div> */}
                
            </HeaderContainer>
            
            <PostContainer>
                <ImgBorder>
                    <Image src={imgURL}></Image>
                </ImgBorder>
                <TextDiv>
                    <Text>{comment}</Text>
                </TextDiv>
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

const HeaderContainer = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10%;
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
    max-width: 70%;
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
    max-height: 50vh;
`

const Text = styled.p`
    padding: 20px;
    font-size: 1em;
    line-height: 1.5em;
`
const QRCode = styled.img`
    display: flex;
    width: 10vw;
    padding-left: 10px;
`

const TextDiv = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;

`