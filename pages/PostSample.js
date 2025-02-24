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
            <Header>Paris</Header>
            <PostContainer>
                <ImgBorder>
                    <Image src="/Polaroid/Sample.png"></Image>
                </ImgBorder>
                <TextDiv>
                    <Text>I went to paris this summer</Text>
                </TextDiv>
                
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
    flex-direction: column;
    justify-content: center;
    
`

const ImgBorder = styled.div`
    width: 70%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    border: 4px solid #64c3d9;
    position: relative; /* Needed for pseudo-element positioning */

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 4px solid black;
        left: -8px;
        top: -8px;
        z-index: -1;
        pointer-events: none;
    }
`

const Image = styled.img`
    width: 100%;
`

const Text = styled.p`
    padding: 10px;
    font-size: 1em;
`

const TextDiv = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;

`