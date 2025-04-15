// components/LinkBox.jsx

'use client';

import styled from 'styled-components';
import Link from 'next/link';

const LinkBox = ({ href, imageSrc, description }) => {
  return (
    <StyledLink href={href}>
      <BoxContainer>
        <ImageSection>
          <img src={imageSrc} alt="Link Box Image" />
        </ImageSection>
        <DescriptionSection>
          <p>{description}</p>
        </DescriptionSection>
      </BoxContainer>
    </StyledLink>
  );
};

// Styled Components
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BoxContainer = styled.div`
  width: 100%;
  max-width: 400px;  // Increased width to make the box bigger
  background-color: #2c2c2c;
  border-radius: 15px;  // Slightly rounded corners for a more modern look
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);  // Slightly stronger shadow
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-12px);  // Slightly larger lift effect on hover
  }
`;

const ImageSection = styled.div`
  width: 100%;
  height: 250px;  // Increased height for a larger image
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  // Ensure the image covers the section
  }
`;

const DescriptionSection = styled.div`
  padding: 20px;  // Increased padding for better spacing
  color: white;
  background-color: #333;
  text-align: center;
  
  p {
    font-size: 1.2rem;  // Increased font size for better readability
    line-height: 1.6;
  }
`;

export default LinkBox;
