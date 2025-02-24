import React from 'react';
import Link  from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';


const Home = () => {
  return (
    <Square href="/">
      <div id="home"></div>
    </Square>
  );
};

const Square = styled(Link)`

  width: 100%;
  height: auto;
  border-radius: 4px;
  text-decoration: none;
  object-fit: cover;

  
  
  #home {
    width: 100%;
    height: 100%;
    background-image: url('/homeTrans.png');
    background-size: cover;
    background-position: center;
    transition: background-image .5s ease-in-out .5s;
    
  }

  #home:hover {
     
     background-image: url('/homeBackground.png');
     
     
  }
`;

export default Home;
