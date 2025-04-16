// components/Header.jsx

'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../Dashboard/Navbar';

function Header() {
  return (
    <MotionHeader
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <LogoWrapper>I-Witness</LogoWrapper>

      <TitleContainer>
        <Title>Keep the money where it matters</Title>
      </TitleContainer>

      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
    </MotionHeader>
  );
}

// Styled Components
const MotionHeader = styled(motion.header)`
  position: relative;
  height: 20vh;
  width: 100%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: linear-gradient(to bottom,#4ade80, #065f46);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;
  font-size: 3rem;
  color: white;
  font-weight: bold;
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 1.875rem;
  font-weight: bold;
`;

export default Header;
