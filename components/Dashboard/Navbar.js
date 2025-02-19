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
        <Top>
          <Centering>
          {/* <img src="/Logo.png" width="100" height="auto"></img> */}
          Flash Back
          </Centering>
        </Top>
        <Bottom><NavLinks>
          <NavButton dest="/auth/signup" text="Collection" theme='tan'/>
          <NavButton dest="/auth/signup" text="Friends"/>
          <NavButton dest="/auth/signup" text="About"/>
          <NavButton dest="/auth/signup" text="Sign Up" theme="blue"/>
          <NavButton dest="/auth/login" text="Log In" theme="pink"/>
        </NavLinks></Bottom>
      </Right>
      
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  height: 15vh; 
  z-index: 1;
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
`;

const Centering = styled.div`
  width: auto;
  height: 0px; 
  position: relative;
  left: 35%;
  top: 25%;
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
