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



const AddPage = () => {

  const { user, setUser } = useStateContext()
  const [ img, setImg ] = useState('')
  const [ img_name, setImgName ] = useState('')
  const [ title, setTitle ] = useState('')
  const [ comment, setComment ] = useState('')
  const router = useRouter()
  const addPostFunc = () => addPost(user,title,img,img_name,comment)
  

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/');
  //   }
  // });

  if (true){
    return (
        <>
        <Navbar/>
        <ContentBox>
        <Section>
            <Padding>
            <Header>Add a Post</Header>
            <InputTitle>Title</InputTitle>
            <Input type="file"  onChange={(e) => {setImg(e.target.files[0]); setImgName(String(e.target.files[0].name));}}/>
            <InputTitle>Title</InputTitle>
            <Input type="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <InputTitle>Comment</InputTitle>
            <Input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
            <UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer" target="_blank"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer" target="_blank">Privacy Policy.</UserAgreementSpan></UserAgreementText>
            </Padding>
            <GeneralButton click={addPostFunc} theme="blue" text={"Add Post"}/>
            <p>If you already have an account, <a href="/auth/login">{img_name}</a>!</p> 

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
  padding: 20px;
}
`

const Header = styled.h1`
  font-size: 24px; /* Adjusted for better scalability */
`;

const Input = styled.input`
  font-size: 16px;
  padding: 5px;
  line-height: 20px;
  box-sizing: content-box;
  height: 20px;
`;

const InputTitle = styled.label` /* Changed to label for semantics */
  font-size: 14px;
`;

const MainButton = styled.button`
  font-size: 16px;

`;

const UserAgreementText = styled.p`
  font-size: 12px;
`;

const UserAgreementSpan = styled(Link)` 
  color: #007bff;

`;


export default AddPage