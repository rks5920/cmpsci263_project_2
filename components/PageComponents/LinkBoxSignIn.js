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

export default LinkBoxSignIn;