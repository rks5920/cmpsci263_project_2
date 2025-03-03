import ContentBox from "@/components/PageComponents/ContentBox"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    router.push("/Post/rks5920@psu.edu/Agn5QJR5U6mV9Hoqqzjc");
    });
  
  return (
    <>
        <Navbar/>
        <ContentBox>
          <Construction>
            <h1>You are currently being routed</h1>
            <img src="https://i.gifer.com/ZSj2.gif" width={500}  height={500}></img>
          </Construction>
        </ContentBox>
        <Footer />
    </>
  )
}

const Construction = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  text-align: center;

`;

