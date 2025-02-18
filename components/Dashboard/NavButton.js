import React from 'react';
import Link  from 'next/link';
import styled from 'styled-components';


const NavButton = ({ text, dest }) => {
  return (
    <StyledButton href={dest}>{text}</StyledButton>
  );
};

const StyledButton = styled(Link)`
  
  display: inline-block;
  
  padding-top: 5px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: black;
  background-color: transparent;
  border: 15px solid transparent;
  background-image: url('/border.png');
  background-position: center;
  background-size: 100% 150%;
  background-repeat:no-repeat;
  text-decoration: none;

  &:hover {
    background-image: url('/borderSel.png');
    color: #fffce3;
  }
`

export default NavButton;
