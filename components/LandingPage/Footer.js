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
  position: absolute;
  bottom: 0;
  left:0;
  width: 100%;
  padding: 10px;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%
`;

const LeftContainer = styled.div`
  
`;

const CenterContainer = styled.div`
  text-align: center;
`;

const RightContainer = styled.div`

`;

const Link = styled.a`

`;

const SocialIcon = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #007bff;
  }
`;

export default Footer;
