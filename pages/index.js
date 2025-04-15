// pages/index.js

import styled from 'styled-components';
import LinkBox from '@/components/PageComponents/LinkBox';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <MainContentWrapper>
        <ContentContainer>
          <LinkBox
            href="/page1"
            imageSrc="\ThreePeople.png"
            description="This is the first link box."
          />
          <LinkBox
            href="/page2"
            imageSrc="https://via.placeholder.com/300x200"
            description="This is the second link box."
          />
          <LinkBox
            href="/page3"
            imageSrc="https://via.placeholder.com/300x200"
            description="This is the third link box."
          />
        </ContentContainer>
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
  align-items: center;
  background-color: #121212;
  color: white;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 1200px;  // Restrict the max width of the container
  width: 100%;
`;

