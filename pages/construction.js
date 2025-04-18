'use client';

import styled from 'styled-components';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';

export default function GifDisplayPage() {
  return (
    <PageContainer>
      <Header />
      <MainContentWrapper>
        <MainInnerWrapper>
          <TextSection>
            <h1>This page is under construction</h1>
          </TextSection>
          <GifContainer>
            <StyledGif
              src="https://i.gifer.com/ZSj2.gif"
              alt="Construction"
            />
          </GifContainer>
        </MainInnerWrapper>
      </MainContentWrapper>
      <Footer />
    </PageContainer>
  );
}

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  margin: 0;
  padding: 0;
`;

const MainContentWrapper = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #121212;
  color: white;
  padding: 40px 20px;
`;

const MainInnerWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSection = styled.div`
  text-align: center;
  margin: 10px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #cccccc;
  }
`;

const GifContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledGif = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  border: 2px solid #333;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
`;
