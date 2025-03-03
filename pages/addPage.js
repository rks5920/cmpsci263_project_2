import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import ContentBox from '@/components/PageComponents/ContentBox'
import GeneralButton from '@/components/GeneralButton'
import Footer from '@/components/PageComponents/Footer'
import { addPost } from '@/backend/Database'
import profCheck from './api/profCheck'



const AddPage = () => {

  const { user, setUser } = useStateContext()
  const [ img, setImg ] = useState('')
  const [ img_name, setImgName ] = useState('')
  const [ title, setTitle ] = useState('')
  const [ comment, setComment ] = useState('')
  const router = useRouter()


  async function addPostFunc(){
    const profanityResult = (await profCheck(comment)||await profCheck(title));
    console.log(profanityResult);
    if(profanityResult){
      setComment("");
      alert("Profanity Detected");
    }else{
    if((img != "")&&(title != "")&&(title != "")&&(comment != "")){
      addPost(user,title,img,img_name,comment)
    }
    else{
      setImg("");
      setTitle("");
      setComment("");
      setImgName("");
      alert("Not all fields filled out");
    }
    }
    
  } 
  

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  });

  


  if (user){
    return (
        <>
        <Navbar/>
        <ContentBox>
        <Section>
            <Padding>
            <Header>Add a Post</Header>
            <InputTitle>Image</InputTitle>
            <Input type="file" accept="image/*" onChange={(e) => {
              if(e.target.files[0].size > 500000) {
                alert("File is too big!");
                e.target.value = "";
              }else{
              setImg(e.target.files[0]); setImgName(String(e.target.files[0].name));
              }
            }}/>
            <InputTitle>{"Title (< 7 character)"}</InputTitle>
            <Input type="title" value={title} maxLength="7" onChange={(e) => setTitle(e.target.value)}/>
            <InputTitle>Comment</InputTitle>
            <Input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </Padding>
            <GeneralButton click={addPostFunc} theme="blue" text={"Add Post"}/>

        </Section>
        </ContentBox>
        <Footer/>
        </>
  )
  }
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  align-items: center;
  text-align: center;

`;

const Padding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

> *{
  padding: 30px;
}
`

const Header = styled.h1`
  font-size: 24px; /* Adjusted for better scalability
  padding: 20px;
`;

const Input = styled.input`
  font-size: 2em;
  padding: 5px;
  line-height: 1em;
  box-sizing: content-box;

`;

const InputTitle = styled.label`
  font-size: 2em;
  
`;



export default AddPage