//This page acts as a sharing page. It calls an api that returns a qr code of the previous post
import ContentBox from "@/components/PageComponents/ContentBox"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import NavButton from "@/components/Dashboard/NavButton"
import GeneralButton from "@/components/GeneralButton"
import Footer from "@/components/PageComponents/Footer"
import { useStateContext } from "@/context/StateContext"
import { useEffect, useState } from "react"



export default function Home() {
const {qrCode, setqrCode} = useStateContext();
const {prevDest, setPrev} = useStateContext();
const {currentDest, setCurrent} = useStateContext();
const [copyStatus, setCopy] = useState("Copy")
const [renderStatus, setRender] = useState(null)

useEffect(() => {
      try {
        setPrev(currentDest);
        setCurrent("/");
        console.log("Previous:", prevDest);
        console.log("Current:", currentDest);
      } catch (error) {
        console.log('Error:', error);
      }
    }, []);

  async function Copy() {
    try {
        await navigator.clipboard.writeText(qrCode);
        setCopy("Copied");
    } catch (err) {
        console.error("Failed to copy:", err);
      }
    }

  return (
    <>
        <Navbar/>
        <ContentBox>
        <HeaderContainer>
                <div width={"10%"} height={"5%"}><NavButton theme={"pink"} text={"Back"} dest={prevDest}/></div>
                <Header>Share</Header>
                <div width={"10%"} height={"5%"}><GeneralButton theme={"blue"} text={copyStatus} click={Copy}/></div>
            </HeaderContainer>
          <QRcode>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${qrCode}&size=500x500`} width={500}  height={500}></img>
          </QRcode>
        </ContentBox>
        <Footer />
    </>
  )
}

const QRcode = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  text-align: center;

`

const HeaderContainer = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10%;
`

const Header = styled.h1`
    padding: 20px 20px 40px 20px;
    text-align: center;
`