import ContentBox from "@/components/PageComponents/ContentBox"
import { useEffect } from "react"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"
import Hero from "@/components/PageComponents/Hero"
import ThumbNail from "@/components/PageComponents/ThumbNail"
import { useStateContext } from "@/context/StateContext"
import { useRouter } from "next/router"


export default function Home() {

  const { user, setUser } = useStateContext()
  const router = useRouter()

  useEffect(() => {
      if (!user) {
        router.push('/');
      }
    }, [user]);

  return (
    <>
        <Navbar/>
        <ContentBox>
            <Header>Welcome to (users) Collection</Header>
            <PostContainer>
                <ThumbNail image="/Polaroid/Sample.png" text="Paris" dest="/PostSample"></ThumbNail>
                <ThumbNail image="/Polaroid/Sample.png" text="Paris" dest="/PostSample"></ThumbNail>
                
                
                
                
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    gap: 10%;
    
`