import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LeftContainer>
          © {new Date().getFullYear()} CMPSC 263
        </LeftContainer>
        <CenterContainer>
          <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
        </CenterContainer>
        <RightContainer>
          <SocialIcon href="#" aria-label="Facebook">FB</SocialIcon>
          <SocialIcon href="#" aria-label="Twitter">TW</SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">IG</SocialIcon>
        </RightContainer>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  height: 5vh;
  padding: 10px;
  background-color: #ffb6c1;
  border-top: 4px solid #b2727b;

`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%
  height: 5vh;
  background-color: transparent;
`;

const LeftContainer = styled.div`
  height: 5vh;
  background-color: transparent;
`;

const CenterContainer = styled.div`
  text-align: center;
  height: 5vh;
  background-color: transparent;
`;

const RightContainer = styled.div`
  height: 5vh;
  background-color: transparent;
`;

const Link = styled.a`
  background-color: transparent;
`;

const SocialIcon = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  height: 5vh;
  background-color: transparent;
  &:hover {
    color: #007bff;
  }
`;

export default Footer;
