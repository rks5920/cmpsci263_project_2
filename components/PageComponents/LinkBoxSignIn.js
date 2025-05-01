'use client';

import styled from 'styled-components';
import Link from 'next/link';

const LinkBoxSignIn = ({ href, imageSrc, description, onClick }) => {
  return (
    <StyledLink href={href} onClick={onClick ? (e) => e.preventDefault() : undefined}>
      <BoxContainer onClick={onClick}>
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
  width: 280px;
  height: 300px;
  background-color: #2c2c2c;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;   // Flex column layout
  justify-content: space-between; // Ensures content is spread out evenly
  height: 100%;
  
  &:hover {
    transform: translateY(-12px);  // Slightly larger lift effect on hover
  }
`;

const ImageSection = styled.div`
  width: 100%;
  flex: 0 0 120px; // Fixed height for image, but it won't grow or shrink
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  // Ensure the image covers the section
  }
`;

const DescriptionSection = styled.div`
  flex: 1;            // Allows description to take up the remaining space
  padding: 10px 20px; // Adjusted padding for better spacing
  color: white;
  background-color: #333;
  text-align: center;
  overflow: hidden;  // Prevent overflow
  display: flex;
  flex-direction: column; // Ensure content is vertically aligned

  p {
    font-size: 1rem;  // Adjusted font size for better fit
    line-height: 1.4;
    white-space: normal; // Ensures the text will wrap
    overflow-wrap: break-word; // Ensures text wraps properly without overflow
  }
`;

export default LinkBoxSignIn;