import React from 'react';
import styled from 'styled-components';

const ContentBox = ({ children }) => {
  return (
    <Content><CenterBox>
      { children }
    </CenterBox></Content>
  );
};

const Content = styled.div`
width: 100%;
height: auto;
position: absolute;
top: 15vh;

display: flex;
justify-content: center;
align-items: center;
`

const CenterBox = styled.div`
  position: relative;
  margin-top: 8px;
  background-color: #fff7e4;
  border: 4px solid #64c3d9;
  width: 80%;
  height: 100%;
  min-height: 79vh;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid black;
    left: -8px;
    top: -8px;
    z-index: 0;
  }
`;
const BlueBox = styled.div`
background-color: #fff7e4;

width: 100%;
height: 100%;
min-height: 80vh;
display: flex;
align-items: center;


position: relative;
x: 4;
y:4;
`

export default ContentBox;
