import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';

// Dummy messages (replace with real data source or API later)
const wagers = [
  { id: '1', amount: '$100', description: 'PennState is gonna win the Championship.', participant1: '0xAbC1234567890abcdef1234567890ABCDEF12345', participant1_status: true, participant2: '0xDeF4567890abcdefABC1234567890ABCDEF67890', participant2_status: false, mediator: '0x7890ABCDEF1234567890abcdef1234567890ABCD', mediator_status: false },
  { id: '2', amount: '$5', description: 'Justin will break up with Karen by Friday.', participant1: '0xAbC1234567890abcdef1234567890ABCDEF12345', participant1_status: true, participant2: '0xDeF4567890abcdefABC1234567890ABCDEF67890', participant2_status: true, mediator: '0x7890ABCDEF1234567890abcdef1234567890ABCD', mediator_status: true  },
  { id: '3', amount: '25', description: 'Can you help mediate this bet?', participant1: '0xDeF4567890abcdefABC1234567890ABCDEF67890', participant1_status: true, participant2: '0xAbC1234567890abcdef1234567890ABCDEF12345', participant2_status: true, mediator: '0x7890ABCDEF1234567890abcdef1234567890ABCD', mediator_status: false  },
];

export default function WagerDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const wager = wagers.find((wager) => wager.id === id);

  if (!wager) {
    return (
      <PageContainer>
        <Header />
        <MainContentWrapper>
          <MainInnerWrapper>
            <ErrorText>Wager not found.</ErrorText>
          </MainInnerWrapper>
        </MainContentWrapper>
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      <MainContentWrapper>
        <MainInnerWrapper>
          <TextSection>
          <StyledHeader>Initiated by: {wager.participant1} </StyledHeader>
          <HeaderRow>
            <StyledHeader>Participant 1</StyledHeader>
            <StatusIndicator $status={wager.participant1_status}>
              {wager.participant1_status ? 'Accepted' : 'Pending'}
            </StatusIndicator>
          </HeaderRow>
          <StyledLabel>{wager.participant1}</StyledLabel>

          <HeaderRow>
            <StyledHeader>Participant 2</StyledHeader>
            <StatusIndicator $status={wager.participant2_status}>
              {wager.participant2_status ? 'Accepted' : 'Pending'}
            </StatusIndicator>
          </HeaderRow>
          <StyledLabel>{wager.participant2}</StyledLabel>

          <HeaderRow>
            <StyledHeader>Mediator</StyledHeader>
            <StatusIndicator $status={wager.mediator_status}>
              {wager.mediator_status ? 'Accepted' : 'Pending'}
            </StatusIndicator>
          </HeaderRow>
          <StyledLabel>{wager.mediator}</StyledLabel>


            <StyledHeader>Wager description</StyledHeader>
            <StyledLabel>{wager.description}</StyledLabel>

            <StyledHeader>Wager Amount</StyledHeader>
            <StyledLabel>{wager.amount}</StyledLabel>

            <ButtonContainer>
              <ActionButton onClick={() => console.log('Accepted')}>Accept</ActionButton>
              <DeclineButton onClick={() => console.log('Declined')}>Decline</DeclineButton>
            </ButtonContainer>
            
            
          </TextSection>
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
  background-color: #1e1e1e;
  padding: 32px;
  border-radius: 8px;
  border: 1px solid #333;
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;


const ErrorText = styled.p`
  color: #f87171;
  font-size: 1.2rem;
`;

const StyledLabel = styled.label`
  font-size: 1.25rem;
  color: #bbbbbb;
`;

const StyledHeader = styled.label`
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffffff;
`;

const StatusIndicator = styled.div`
  display: inline-block;
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 9999px; /* extra round pill shape */
  font-size: 1rem;
  font-weight: 600;
  background-color: ${(props) => (props.$status ? '#4ade80' : '#facc15')};
  color: ${(props) => (props.$status ? '#065f46' : '#92400e')};
  border: 1px solid ${(props) => (props.$status ? '#047857' : '#f59e0b')};
  max-width: fit-content;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
`;


const ActionButton = styled.button`
  background-color: #4ade80;
  color: #065f46;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #22c55e;
  }
`;

const DeclineButton = styled(ActionButton)`
  background-color: #f87171;
  color: #7f1d1d;

  &:hover {
    background-color: #ef4444;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

