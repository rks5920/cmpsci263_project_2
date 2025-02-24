import ContentBox from "@/components/PageComponents/ContentBox"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"
import Hero from "@/components/PageComponents/Hero"
import ThumbNail from "@/components/PageComponents/ThumbNail"


export default function Home() {
  return (
    <>
        <Navbar/>
        <ContentBox>
            <Header>Welcome to (users) Collection</Header>
            <PostContainer>
                <ThumbNail image="/Polaroid/Sample.png" text="Paris"></ThumbNail>
                <ThumbNail image="/Polaroid/Sample.png" text="Paris"></ThumbNail>
                <ThumbNail image="/Polaroid/Sample.png" text="Paris"></ThumbNail>
                <ThumbNail image="/Polaroid/Sample.png" text="Paris"></ThumbNail>
                <ThumbNail image="/Polaroid/Sample.png" text="Paris"></ThumbNail>
                
                
                
                
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
    gap: 110px;
    
`