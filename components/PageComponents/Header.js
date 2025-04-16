'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../Dashboard/Navbar';
import { useEffect, useState } from 'react';

function Header() {
  const [account, setAccount] = useState(null);
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      setIsMetaMaskAvailable(true);
    }
  }, []);

  const connectMetaMask = async () => {
    if (!isMetaMaskAvailable) {
      alert('MetaMask is not installed. Please install it to sign in.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (err) {
      console.error('MetaMask connection error:', err);
    }
  };

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
  }
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
