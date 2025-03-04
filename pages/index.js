//This is the main landing page with a search bar to access users
import ContentBox from "@/components/PageComponents/ContentBox"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"
import Hero from "@/components/PageComponents/Hero"
import NavButton from "@/components/Dashboard/NavButton"

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

