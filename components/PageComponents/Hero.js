import React from 'react';
import styled from 'styled-components';
import NavButton from '../Dashboard/NavButton';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        Welcome to Flash Back! 
      </HeroHeader>
      <HeroContent>
        Flash Back to a time before algorithms and short form content with this simple way to share your memories
      </HeroContent>
      <SearchBar>
        <h1>Search by Email</h1>
        <Input type="email"></Input>
      </SearchBar>
      <NavButton text="Search" dest="./" theme="blue"/>
      
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  align-items: center;
  text-align: center;
  `
const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 20px;
  line-height: 70px;
  background-color: transparent;
  align-items: center;
  text-align: center;

`
const HeroHeader = styled.h1`
  justify-content: center;
  padding: 20px;
`
const HeroContent = styled.div`
  width: 75%;
  height:20vh;
  line-height: 1.5;
  justify-content: center;
  
`
const Input = styled.input`
  display: flex;
  font-size: 16px;
  line-height: 40px;
  box-sizing: content-box;
  //height: 30px;
`;

export default Hero;
