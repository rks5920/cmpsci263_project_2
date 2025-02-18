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

  width: 100%; // Adjust the size as needed
  height: auto;
  border-radius: 4px; // Adjust for square or rounded corners
  text-decoration: none;
  object-fit: cover;

  
  
  #home {
    width: 100%;
    height: 100%;
    background-image: url('/home.png');
    background-size: cover;
    background-position: center;
  }

  #home:hover {
     // Adjust hover effect as needed
     background-image: url('/home2.png');
     transition: background-image 0.3s ease-in-out;
  }
`;

export default Home;
