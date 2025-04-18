import styled from 'styled-components';
import LinkBox from '@/components/PageComponents/LinkBox';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <MainContentWrapper>
        <MainInnerWrapper>
          <TextSection>
            <h1>Make your own odds with I-Witness</h1>
            <p>Traditional sports betting website take up to 10% of your bets. With our decentralized and transparent structure, earn more and know where your money goes!</p>
          </TextSection>
          <ContentContainer>
            <LinkBox
              href="/wager"
              imageSrc="/ThreePeople.png"
              description="Choose a mediator and make a bet with your friends!"
            />
            <LinkBox
              href="/page2"
              imageSrc="/sports.png"
              description="Place a bet on sporting events. No mediator needed!"
            />
            <LinkBox
              href="/page3"
              imageSrc="/InternetPeople.png"
              description="Post your bets to other users!"
            />
          </ContentContainer>
        </MainInnerWrapper>
      </MainContentWrapper>
      <Footer />
    </PageContainer>
  );
}

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
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSection = styled.div`
  text-align: center;
  margin: 60px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #cccccc;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  width: 100%;
`;
