import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home';
import NavButton from '@/components/Dashboard/NavButton';

const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      <Left><Home></Home></Left>
      <Right>
        <Top>Flash Back</Top>
        <Bottom><NavLinks>
          <NavButton dest="/auth/signup" text="Collections"/>
          <NavButton dest="/auth/signup" text="Sign Up"/>
          <NavButton dest="/auth/login" text="Log In"/>
        </NavLinks></Bottom>
      </Right>
      
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 15vh; 
`;

const Left = styled.div`
  width: 15%;  
  height: 15vh; 
  
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Bottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;


const NavLinks = styled.div`

`;

const ButtonLink = styled(Link)`

`;

export default Navbar;
