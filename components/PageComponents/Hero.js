import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        Welcome to Flash Back! 
      </HeroHeader>
      <HeroContent>
        Flash Back to a time before algorithms and short form content with this simple way to share your memories
      </HeroContent>
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

const HeroHeader = styled.h1`
  justify-content: center;
  padding: 20px;
`
const HeroContent = styled.div`
  width: 75%;
  line-height: 1.5;
  justify-content: center;
  
`

export default Hero;
