import styled from 'styled-components';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useStateContext } from '@/context/StateContext';
import { ethers } from "ethers";
import { JsonRpcProvider, parseEther, Contract,BrowserProvider } from 'ethers';

export default function InboxPage() {
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
              participant1: userWagers[1],
              participant2: userWagers[2],
              mediator: userWagers[3],
              winner: userWagers[4],
              description: userWagers[5],
              participant2_status: userWagers[6],
              mediator_status: userWagers[7],
              amount: ethers.formatEther(userWagers[8]),
              wager_status: userWagers[9]
            };
            if (parsedWager.wager_status == true){
              fetchedWagers.push(parsedWager);
            }
            console.log("Wager info:", parsedWager);
          };
          setWagers(fetchedWagers);
      
        } catch (err) {
          console.error('Smart contract call failed:', err);
          setError('Smart contract call failed. Check console for details.');
        }
      };

      useEffect(() => {
        handleFetchWagers();
      }, []);

  return (
    <PageContainer>
      <Header />
      <MainContentWrapper>
        <MainInnerWrapper>
          <TextSection>
            <h1>Completed Wagers</h1>
            <p>All of your completed incoming and outgoing wagers are listed here.</p>
          </TextSection>
          <InboxContainer>
            {wagers.map((wgr) => (
              <MessageRow key={wgr.id}>
                <MessageInfo>
                  <Sender>{wgr.participant1.slice(0, 6)}...{wgr.participant1.slice(-4)}</Sender>
                  <Subject>{wgr.amount}</Subject>
                  <Preview>{wgr.description.slice(0,40)}</Preview>
                </MessageInfo>
                <Link href={`/inbox/${wgr.id}`} passHref legacyBehavior>
                    <ViewButton as="a">View</ViewButton>
                </Link>
              </MessageRow>
            ))}
          </InboxContainer>
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
  margin: 40px 0;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #cccccc;
  }
`;

const InboxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MessageRow = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1e1e1e;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
`;

const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sender = styled.span`
  font-weight: bold;
  color: #ffffff;
`;

const Subject = styled.span`
  color: #cccccc;
  margin-top: 4px;
`;

const Preview = styled.span`
  font-size: 0.9rem;
  color: #999999;
  margin-top: 2px;
`;

const ViewButton = styled.button`
  text-decoration: none;
  padding: 10px 16px;
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
