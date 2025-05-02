'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStateContext } from '@/context/StateContext.js';

function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
  const router = useRouter();

  // Check MetaMask connection
  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setIsConnected(accounts.length > 0);
      }
    };
    checkConnection();
  }, []);

  const handleProtectedClick = (e, route) => {
    e.preventDefault();
    if (isConnected) {
      router.push(route);
    } else {
      alert('Please connect your MetaMask wallet to access this page.');
    }
  };

  return (
    <Nav>
      <StyledLink href="/">Home</StyledLink>
      <FakeLink as="button" onClick={(e) => handleProtectedClick(e, '/wager')}>
        Wager
      </FakeLink>
      <FakeLink as="button" onClick={(e) => handleProtectedClick(e, '/inbox')}>
        Inbox
      </FakeLink>
      <FakeLink as="button" onClick={(e) => handleProtectedClick(e, '/completed')}>
        Completed
      </FakeLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 20px 40px;
  height: 80px;
`;

const linkStyles = css`
  color: white;
  font-weight: 600;
  font-size: 1.4rem;
  text-decoration: none;
  background-color: #065f46;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #047857;
    color: #bbf7d0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;

const StyledLink = styled(Link)`
  ${linkStyles}
`;

const FakeLink = styled.button`
  ${linkStyles}
`;

export default Navbar;
