import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import {login, isEmailInUse} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import ContentBox from '@/components/PageComponents/ContentBox'
import Footer from '@/components/PageComponents/Footer'
import GeneralButton from '@/components/GeneralButton'

const Login = () => {

  const { user, setUser } = useStateContext()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const router = useRouter()


  async function handleLogin(){
    try{
        await login(email, password, setUser)
        router.push('/')
        }catch(err){
      }
  }


  return (
    <>
    <Navbar/>
    <ContentBox>
      <Section>
        <Padding>
        <Header>Log In</Header>
        <InputTitle>Email</InputTitle>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <InputTitle>Password</InputTitle>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer" target="_blank"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer" target="_blank">Privacy Policy.</UserAgreementSpan></UserAgreementText>
        </Padding>
        <GeneralButton click={handleLogin}text="Log In" theme="pink"></GeneralButton>
        <p>If you have not already signed up, <a href="/auth/signup">Sign Up</a>!</p> 

    </Section>
    </ContentBox>
    <Footer/>
    </>
  )
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


export default Login