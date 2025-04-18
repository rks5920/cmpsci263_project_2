// components/Navbar.jsx

'use client';

import styled from 'styled-components';
import Link from 'next/link';

function Navbar() {
  return (
    <Nav>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/wager">Wager</StyledLink>
      <StyledLink href="/inbox">Inbox</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 3rem;  // Increased gap for more space between links
  align-items: center;  // Vertically center the items within the navbar
  padding: 20px 40px;  // Increased padding for a bigger navbar
  height: 80px;  // Set a fixed height for the navbar
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: 600;
  font-size: 1.4rem;
  text-decoration: none;
  background-color: #065f46;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #047857;
    color: #bbf7d0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;


export default Navbar;
