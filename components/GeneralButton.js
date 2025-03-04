import React from 'react';
import styled from 'styled-components';


const GeneralButton = ({ text, theme, click}) => {

  if(theme == "blue"){
    return (
      <StyledButtonBlue onClick={click} id={theme}>{text}</StyledButtonBlue>
    );
  }
  else if(theme == "pink"){
    return (
      <StyledButtonPink onClick={click} id={theme}>{text}</StyledButtonPink>
    );
  }
  else{
    return (
      <StyledButton onClick={click} id={theme}>{text}</StyledButton>
    );
  }
  
};



const StyledButton = styled.button`
  
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

const StyledButtonPink = styled.button`
  
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
const StyledButtonBlue = styled.button`
  
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
export default GeneralButton;
