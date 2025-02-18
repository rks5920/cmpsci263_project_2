import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import Footer from '@/components/LandingPage/Footer'
//import PhotoUploader from '@/components/PhotoUploader'
import { useStateContext } from '@/context/StateContext'
//import { getAllUserPhotos } from '@/backend/Database'
const Dashboard = () => {

  const { user } = useStateContext()
  
  const [age, setAge] = useState(22)


  return (

    <Section>
      <Navbar/>
      <TopHeader>
        Dashboard
      </TopHeader>
      <button onClick={() => setAge(401)}>This is a button</button>
      <Footer/>
    </Section>

  )
}

//Styled Component

const Section = styled.section`
width: 100%
height: 100vh;

`

const TopHeader = styled.h1`
font-size: 20px;
display: flex;
`


export default Dashboard