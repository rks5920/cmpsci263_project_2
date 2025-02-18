import React from 'react';
import Link  from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Home = () => {
  return (
    <Square href="/dashboard">
      <Image src="/home.png" alt="home" width={200} height={200}/>
    </Square>
  );
};

const Square = styled(Link)`

  align-items: left;
  justify-content: left;
  width: 50px; // Adjust the size as needed
  height: 50px; // Adjust the size as needed
  background-color: #007bff; // Adjust the background color as needed
  color: white;
  border-radius: 4px; // Adjust for square or rounded corners
  text-decoration: none;
  
  svg {
    width: 24px; // Adjust icon size as needed
    height: 24px; // Adjust icon size as needed
  }

  &:hover {
    background-color: #0056b3; // Adjust hover effect as needed
  }
`;

export default Home;
