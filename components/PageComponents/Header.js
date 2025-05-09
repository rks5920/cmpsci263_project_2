'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../Dashboard/Navbar';
import { useEffect, useState } from 'react';
import { useStateContext } from '@/context/StateContext.js';
import { useRouter, usePathname } from 'next/navigation';

function Header() {
  const { account, connectMetaMask } = useStateContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!account && ((pathname !== '/') && (pathname !== '/construction'))) {
      router.push('/');
    }
  }, [account, pathname]);


  return (
    <MotionHeader
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <LogoWrapper>I-Witness</LogoWrapper>

      <SignInButton onClick={connectMetaMask}>
        {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Sign In'}
      </SignInButton>

      <TitleContainer>
        <Title className="title">Keep the money where it matters</Title>
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
  z-index: 2;
`;

const SignInButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  padding: 0.6rem 1.2rem;
  background-color: #064e3b;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #047857;
    color: #bbf7d0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem; /* Creates space between the top and title */
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  z-index: 1;
  
  /* Hide the title when the logo is present */
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
