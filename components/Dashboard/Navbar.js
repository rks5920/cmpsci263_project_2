// components/Navbar.jsx

'use client';

import styled from 'styled-components';
import Link from 'next/link';

function Navbar() {
  return (
    <Nav>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/wager">Wager</StyledLink>
      <StyledLink href="/contact">Pending</StyledLink>
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
  font-weight: 600;  // Increased font weight for a bolder look
  font-size: 1.8rem;  // Increased font size for the navbar items
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #bbf7d0;  // Highlight on hover
  }
`;

export default Navbar;
