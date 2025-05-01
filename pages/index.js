import styled from 'styled-components';
import LinkBox from '@/components/PageComponents/LinkBox';
import LinkBoxSignIn from '@/components/PageComponents/LinkBoxSignIn';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';
import { useRouter } from 'next/navigation';
import { useStateContext } from '@/context/StateContext';

export default function Home() {

  const router = useRouter();
  const { account: isConnected } = useStateContext();
  
  const handleProtectedClick = (e, route) => {
    e.preventDefault();
    if (isConnected) {
      router.push(route);
    } else {
      alert('Please connect your MetaMask wallet to access this page.');
    }
  };


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
            <LinkBoxSignIn
              href="/wager"
              imageSrc="/ThreePeople.png"
              description="Choose a mediator and make a bet with your friends!"
              onClick={(e) => handleProtectedClick(e, '/wager')}
            />
            <LinkBox
              href="/construction"
              imageSrc="/sports.png"
              description="Place a bet on sporting events. No mediator needed!"
            />
            <LinkBox
              href="/construction"
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
