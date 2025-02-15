import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//import Link from 'next/link'
//import Navbar from '@/components/Dashboard/Navbar'
//import PhotoUploader from '@/components/PhotoUploader'
import { useStateContext } from '@/context/StateContext'
//import { getAllUserPhotos } from '@/backend/Database'
const Dashboard = () => {

  const { user } = useStateContext()
  
  const [age, setAge] = useState(22)

  useEffectFunction(){

  }

  useEffect(useEffectFunction, [age])

  return (
    <Section>
      <TopHeader>
        Dashboard
      </TopHeader>
      <button onClick={() => setAge(401)}>This is a button</button>
    </Section>
  )
}

//Styled Component

const Section = styled.section`
width: 100%
height: 100vh;
display: flex;
justify-content: center;
`

const TopHeader = styled.h1`
font-size: 20px;
display: flex;
`


export default Dashboard