import styled from 'styled-components';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';

export default function InputPage() {
  return (
    <PageContainer>
      <Header />
      <MainContentWrapper>
        <MainInnerWrapper>
          <TextSection>
            <h1>Enter Your Details for a Mediated Bet</h1>
            <p>Mediated Bets allow for you to place a bet on practically anything with another user. A mediator is used to confirm the winner and assign the prize.</p>
          </TextSection>
          <FormContainer>
            <StyledHeader>Wallet of opossing wager</StyledHeader>
            <StyledLabel htmlFor="Wallet of opossing wager">This is the person you expect to take your bet. They must accept the wager for it to be valid.</StyledLabel>
            <StyledInput id="opp" type="text" placeholder="Ex: 0xAbC1234Ef567890abcdEF1234567890aBCdEf123" />

            <StyledHeader>Wager description</StyledHeader>
            <StyledLabel htmlFor="Wager Description"> Please provide a brief description of the wager. This is what the mediator will use to validate the winner.</StyledLabel>
            <StyledInput id="title" type="text" placeholder="Ex: Jack is faster than Tyler. If Jack races Tyler, Jack will win." />

            <StyledHeader htmlFor="betAmount">Wager Amount</StyledHeader>
            <StyledInput id="betAmount" type="number" placeholder="$100" />
            <StyledHeader>Wallet of Mediator</StyledHeader>
            <StyledLabel htmlFor="Wallet of Mediator">The mediator will be the person who validates and dictates the winner based on the wager description. Choose someone you trust!The mediator must accept the wager for it to be valid.</StyledLabel>
            <StyledInput id="med" type="text" placeholder="0xFf09eD456AaBcde7890123Ef4567890bCdEf4567"/>

            <StyledButton>Submit</StyledButton>
          </FormContainer>
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
  max-width: 600px;
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  color: #bbbbbb;
`;

const StyledHeader = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
  color: #bbbbbb;
`;

const StyledInput = styled.input`
  padding: 10px;
  background-color: #1e1e1e;
  border: 1px solid #333333;
  border-radius: 5px;
  color: white;
  font-size: 1rem;

  &:focus {
    border-color: #00bfff;
    outline: none;
  }
`;

const StyledButton = styled.button`
  padding: 12px;
  background-color: #4ade80;
  color: #121212;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #047857;
  }
`;
