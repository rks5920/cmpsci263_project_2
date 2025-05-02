import styled from 'styled-components';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useStateContext } from '@/context/StateContext';
import { ethers } from "ethers";
import { JsonRpcProvider, parseEther, Contract,BrowserProvider } from 'ethers';
import { useRouter } from 'next/router';


export default function WagerDetailPage() {
  
  const router = useRouter();
  const { id } = router.query;
  const [wagers, setWagers] = useState([]);
  const fetchedWagers = [];

  const [error, setError] = useState('');

  const { account, contractABI, contractAddress } = useStateContext();

  const handleFetchWagers = async () => {

    setError('');

    try {
      // Connect to MetaMask
      if (!window.ethereum) {
        alert('MetaMask not detected');
        return;
      }

      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      console.log('Connected MetaMask address:', userAddress);

      const network = await provider.getNetwork();
      console.log('Current chain ID:', network.chainId);

      if (network.chainId !== 97n) {
        alert('Please switch to the Binance Smart Chain Testnet (chainId 97)');
        return;
      }

      // Instantiate contract with signer
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const userWagerIds = await contract.get_Wagers(account);
      for(let id in userWagerIds){
        console.log("Wager ID", userWagerIds[id].toString());
        const userWagers = await contract.get_Wager_Status(userWagerIds[id].toString());
        const parsedWager = {
          id: userWagers[0].toString(),
          participant1: userWagers[1].toLowerCase(),
          participant2: userWagers[2].toLowerCase(),
          mediator: userWagers[3].toLowerCase(),
          winner: userWagers[4].toLowerCase(),
          description: userWagers[5],
          participant2_status: userWagers[6],
          mediator_status: userWagers[7],
          amount: userWagers[8],
          wager_status: userWagers[9]
        };

        fetchedWagers.push(parsedWager);
        console.log("Wager info:", parsedWager);
      };
      setWagers(fetchedWagers);

    } catch (err) {
      console.error('Smart contract call failed:', err);
      setError('Smart contract call failed. Check console for details.');
    }
  };

  const ConditionalButtons = () => {
    if ((account == wager.mediator) && (wager.wager_status == false) && (wager.participant2_status == true) && (wager.mediator_status == true)){
      return(
        <ButtonContainer>
          <StyledHeader>Medicate this wager. Who won?</StyledHeader>
          <ActionButton onClick={(e) => handleWinner("Participant 1", e)}>Participant 1</ActionButton>
          <ActionButton onClick={(e) => handleWinner("Participant 2", e)}>Participant 2</ActionButton>
        </ButtonContainer>
      );
      
    }

    if (((account != wager.participant2) && (account != wager.mediator)) || ((account == wager.participant2) && (wager.participant2_status == true))|| ((account == wager.mediator) && (wager.mediator_status == true))|| (wager.wager_status == true)){
      return null;
    } 
    
    return (
      <ButtonContainer>
        <ActionButton onClick={(e) => handleAcceptDecline("accept", e)}>Accept</ActionButton>
        <DeclineButton onClick={(e) => handleAcceptDecline("decline", e)}>Decline</DeclineButton>
      </ButtonContainer>
    );
  };

  const ConditionalWinner = () => {
    if (wager.wager_status != true){
      return null;
    }

    if (wager.winner == "0x0000000000000000000000000000000000000000"){
      return (
        <HeaderRow>
          <StyledHeader>This wager was declined</StyledHeader>
        </HeaderRow>
      )
    }
  
    return (
      <HeaderRow>
        <StyledHeader>Winner:</StyledHeader>
        <StyledLabel>{wager.winner}</StyledLabel>
      </HeaderRow>
      
    );
  };

  const handleAcceptDecline = async (acceptDecline,e) => {
      e.preventDefault();
    
      setError('');
    
      try {
        // Connect to MetaMask
        if (!window.ethereum) {
          alert('MetaMask not detected');
          return;
        }
    
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        console.log('Connected MetaMask address:', userAddress);
    
        const network = await provider.getNetwork();
        console.log('Current chain ID:', network.chainId);
    
        if (network.chainId !== 97n) {
          alert('Please switch to the Binance Smart Chain Testnet (chainId 97)');
          return;
        }
    
        // Instantiate contract with signer
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
    
        // Call the smart contract function
        console.log("Status:", acceptDecline);
        if(acceptDecline == "accept"){
          if(account === wager.participant2){
            const tx = await contract.acceptWager_User2(id,{ value: wager.amount });
      
            console.log('Transaction submitted:', tx.hash);
            await tx.wait();
        
            alert('Wager accepted successfully!');
            window.location.reload();
          }

          if(account === wager.mediator){
            const tx = await contract.acceptWager_Mediator(id);
      
            console.log('Transaction submitted:', tx.hash);
            await tx.wait();
        
            alert('Wager accepted successfully!');
            window.location.reload();
          } 
        }
        if(acceptDecline == "decline"){
          if(account === wager.participant2){
            const tx = await contract.declineWagerUser2(id);
      
            console.log('Transaction submitted:', tx.hash);
            await tx.wait();
        
            alert('Wager declined successfully!');
            window.location.reload();
          }
  
          if((account === wager.mediator)&&(wager.participant2_status == false)){
            const tx = await contract.declineWagerMediator1(id);
      
            console.log('Transaction submitted:', tx.hash);
            await tx.wait();
        
            alert('Wager declined successfully!');
            window.location.reload();
          } 

          if((account === wager.mediator)&&(wager.participant2_status == true)){
            const tx = await contract.declineWagerMediator2(id);
      
            console.log('Transaction submitted:', tx.hash);
            await tx.wait();
        
            alert('Wager accepted successfully!');
            window.location.reload();
          } 
        }
        
      }
      catch (err) {
      console.error('Smart contract call failed:', err);
      setError('Smart contract call failed. Check console for details.');
      }
    };

    const handleWinner = async (winner,e) => {
      e.preventDefault();
    
      setError('');
    
      try {
        // Connect to MetaMask
        if (!window.ethereum) {
          alert('MetaMask not detected');
          return;
        }
    
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        console.log('Connected MetaMask address:', userAddress);
    
        const network = await provider.getNetwork();
        console.log('Current chain ID:', network.chainId);
    
        if (network.chainId !== 97n) {
          alert('Please switch to the Binance Smart Chain Testnet (chainId 97)');
          return;
        }
    
        // Instantiate contract with signer
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
    
        // Call the smart contract function
        console.log("Winner:", winner);
        if(winner == "Participant 1"){
          const tx = await contract.settleWager(id, wager.participant1);
    
          console.log('Transaction submitted:', tx.hash);
          await tx.wait();
      
          alert('Wager settled successfully! Winner:',wager.participant1);
          window.location.reload();
        }
        if(winner == "Participant 2"){
          const tx = await contract.settleWager(id, wager.participant2);
    
          console.log('Transaction submitted:', tx.hash);
          await tx.wait();
      
          alert('Wager settled successfully! Winner:',wager.participant2);
          window.location.reload();
        }
      }
      catch (err) {
      console.error('Smart contract call failed:', err);
      setError('Smart contract call failed. Check console for details.');
      }
    };

  useEffect(() => {
    handleFetchWagers();
  }, []);

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
            <StatusIndicator $status={true}>
              {true ? 'Accepted' : 'Unaccepted'}
            </StatusIndicator>
            <UserIndicator $visible={account == wager.participant1}>
              You
            </UserIndicator>
          </HeaderRow>
          <StyledLabel>{wager.participant1}</StyledLabel>

          <HeaderRow>
            <StyledHeader>Participant 2</StyledHeader>
            <StatusIndicator $status={wager.participant2_status}>
              {wager.participant2_status ? 'Accepted' : 'Unaccepted'}
            </StatusIndicator>
            <UserIndicator $visible={account == wager.participant2}>
              You
            </UserIndicator>
          </HeaderRow>
          <StyledLabel>{wager.participant2}</StyledLabel>

          <HeaderRow>
            <StyledHeader>Mediator</StyledHeader>
            <StatusIndicator $status={wager.mediator_status}>
              {wager.mediator_status ? 'Accepted' : 'Unaccepted'}
            </StatusIndicator>
            <UserIndicator $visible={account == wager.mediator}>
              You
            </UserIndicator>
          </HeaderRow>
          <StyledLabel>{wager.mediator}</StyledLabel>


          <StyledHeader>Wager description</StyledHeader>
          <StyledLabel>{wager.description}</StyledLabel>

          <StyledHeader>Wager Amount</StyledHeader>
          <StyledLabel>${ethers.formatEther(wager.amount)*600}</StyledLabel>

          <ConditionalButtons/>
          <ConditionalWinner/>
            
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

const UserIndicator = styled.div`
  display: ${(props) => (props.$visible ? 'inline-block' : 'none')};
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 600;
  background-color: #3b82f6;  /* fixed blue */
  color: #1e3a8a;
  border: 1px solid #2563eb;
  max-width: fit-content;
`;


