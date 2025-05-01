import styled from 'styled-components';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';
import { useState } from 'react';
import { useStateContext } from '@/context/StateContext';
import { ethers } from "ethers";
import { JsonRpcProvider, parseEther, Contract,BrowserProvider } from 'ethers';


export default function InputPage() {
  const [opp, setOpp] = useState('');
  const [title, setTitle] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [med, setMed] = useState('');
  const [error, setError] = useState('');

  const { account, contractABI, contractAddress } = useStateContext(); // Access context

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!opp || !title || !betAmount || !med) {
      setError('Please fill in all fields.');
      return;
    }
  
    setError('');
  
    try {
      // Convert USD to BNB (static rate for now)
      const usdToBnbRate = 600; // $600 = 1 BNB
      const usdAmount = parseFloat(betAmount);
      const bnbAmount = usdAmount / usdToBnbRate;
      const betValueWei = ethers.parseEther(bnbAmount.toFixed(18));
  
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
      const tx = await contract.initWager(
        opp,
        med,
        title,
        betValueWei,
        { value: betValueWei }
      );
  
      console.log('Transaction submitted:', tx.hash);
      await tx.wait();
  
      alert('Wager created successfully!');
    } catch (err) {
      console.error('Smart contract call failed:', err);
      setError('Smart contract call failed. Check console for details.');
    }
  };
  
  

  return (
    <PageContainer>
      <Header />
      <MainContentWrapper>
        <MainInnerWrapper>
          <TextSection>
            <h1>Enter Your Details for a Mediated Bet</h1>
            <p>Mediated Bets allow for you to place a bet on practically anything with another user. A mediator is used to confirm the winner and assign the prize.</p>
          </TextSection>
          <FormContainer onSubmit={handleSubmit}>
            <StyledHeader>Wallet of Opposing Wager</StyledHeader>
            <StyledLabel htmlFor="Wallet of Opposing Wager">This is the person you expect to take your bet. They must accept the wager for it to be valid.</StyledLabel>
            <StyledInput
              id="opp"
              type="text"
              value={opp}
              onChange={(e) => setOpp(e.target.value)}
              placeholder="Ex: 0xAbC1234Ef567890abcdEF1234567890aBCdEf123"
            />

            <StyledHeader>Wager Description</StyledHeader>
            <StyledLabel htmlFor="title">This is the person you expect to take your bet. They must accept the wager for it to be valid.</StyledLabel>
            <StyledInput
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Jack is faster than Tyler. If Jack races Tyler, Jack will win."
            />

            <StyledHeader htmlFor="betAmount">Wager Amount</StyledHeader>
            <StyledLabel htmlFor="betAmount">This will be the amount wagered by each participant. The fee for the smart contract will be removed from the winnings.</StyledLabel>
            <StyledInput
              id="betAmount"
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              placeholder="$100"
            />

            <StyledHeader>Wallet of Mediator</StyledHeader>
            <StyledLabel htmlFor="med">The mediator will be the person who validates and dictates the winner based on the wager description. Choose someone you trust! The mediator must accept the wager for it to be valid.</StyledLabel>
            <StyledInput
              id="med"
              type="text"
              value={med}
              onChange={(e) => setMed(e.target.value)}
              placeholder="0xFf09eD456AaBcde7890123Ef4567890bCdEf4567"
            />

            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <StyledButton type="submit">Submit</StyledButton>
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

const FormContainer = styled.form`
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 1rem;
  text-align: center;
`;

