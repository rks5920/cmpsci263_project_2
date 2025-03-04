import React from 'react';
import styled from 'styled-components';
import NavButton from '../Dashboard/NavButton';

const ContentBox = ({ children }) => {
  return (
    <Content><CenterBox>
      {children}
    </CenterBox></Content>
  );
};

const Content = styled.div`
width: 100%;
height: auto;
display: flex;
flex: 1;
justify-content: center;
margin-Bottom:60px

`

const CenterBox = styled.div`
  position: relative;
  background-color: #fff7e4;
  border: 4px solid #64c3d9;
  width: 80%;
  min-height: 79vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid black;
    left: -8px;
    top: -8px;
    z-index: 0;
    pointer-events: none;
  }
`;

export default ContentBox;
