import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      <Left><Home></Home></Left>
      <Top>Flash Back</Top>
      <Bottom><NavLinks>
        <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
        <ButtonLink href="/auth/login">Login</ButtonLink>
      </NavLinks></Bottom>
    </Nav>
  );
};

const Nav = styled.nav`
  
`;
const Left = styled.nav`
  align-items: left;
  
`;
const Top = styled.nav`
  display:inline-flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;
const Bottom = styled.nav`
  display:inline-flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;


const NavLinks = styled.div`

`;

const ButtonLink = styled(Link)`

`;

export default Navbar;
