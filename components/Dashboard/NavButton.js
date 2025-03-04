
import React from 'react';
import Link  from 'next/link';
import styled from 'styled-components';


const NavButton = ({ text, dest, theme}) => {

  if(theme == "blue"){
    return (
      <StyledButtonBlue href={dest} id={theme}>{text}</StyledButtonBlue>
    );
  }
  else if(theme == "pink"){
    return (
      <StyledButtonPink href={dest} id={theme}>{text}</StyledButtonPink>
    );
  }
  else{
    return (
      <StyledButton href={dest} id={theme}>{text}</StyledButton>
    );
  }
  
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
  background-image: url('/Buttons/border.png');
  background-position: center;
  background-size: 100% 150%;
  background-repeat:no-repeat;
  text-decoration: none;

  &:hover {
    background-image: url('/Buttons/borderSel.png');
    color: #fffce3;
  }
`

const StyledButtonPink = styled(Link)`
  
  display: inline-block;
  
  padding-top: 5px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: black;
  background-color: transparent;
  border: 15px solid transparent;
  background-image: url('/Buttons/pink-border.png');
  background-position: center;
  background-size: 100% 150%;
  background-repeat:no-repeat;
  text-decoration: none;

  &:hover {
    background-image: url('/Buttons/pink-borderSel.png');
    color: #ffb6b7;
  }
`
const StyledButtonBlue = styled(Link)`
  
  display: inline-block;
  
  padding-top: 5px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: black;
  background-color: transparent;
  border: 15px solid transparent;
  background-image: url('/Buttons/blue-border.png');
  background-position: center;
  background-size: 100% 150%;
  background-repeat:no-repeat;
  text-decoration: none;

  &:hover {
    background-image: url('/Buttons/blue-borderSel.png');
    color: #75d2ff;
  }
`
export default NavButton;
