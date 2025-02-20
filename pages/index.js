import ContentBox from "@/components/PageComponents/ContentBox"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"
import Hero from "@/components/PageComponents/Hero"
export default function Home() {
  return (
    <>
        <Navbar/>
        <ContentBox>
          <Hero/>
        </ContentBox>
        <Footer />
    </>
  )
}

