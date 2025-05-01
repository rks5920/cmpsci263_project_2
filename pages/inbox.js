import styled from 'styled-components';
import Header from '@/components/PageComponents/Header';
import Footer from '@/components/PageComponents/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useStateContext } from '@/context/StateContext';
import { ethers } from "ethers";
import { JsonRpcProvider, parseEther, Contract,BrowserProvider } from 'ethers';

export default function InboxPage() {
    const wagers = [
        { id: '1', amount: '$100', description: 'PennState is gonna win the Championship.', participant1: '0xAbC1234567890abcdef1234567890ABCDEF12345', participant1_status: true, participant2: '0xDeF4567890abcdefABC1234567890ABCDEF67890', participant2_status: false, mediator: '0x7890ABCDEF1234567890abcdef1234567890ABCD', mediator_status: false },
        { id: '2', amount: '$5', description: 'Justin will break up with Karen by Friday.', participant1: '0xAbC1234567890abcdef1234567890ABCDEF12345', participant1_status: true, participant2: '0xDeF4567890abcdefABC1234567890ABCDEF67890', participant2_status: true, mediator: '0x7890ABCDEF1234567890abcdef1234567890ABCD', mediator_status: true  },
        { id: '3', amount: '$25', description: 'Can you help mediate this bet?', participant1: '0xDeF4567890abcdefABC1234567890ABCDEF67890', participant1_status: true, participant2: '0xAbC1234567890abcdef1234567890ABCDEF12345', participant2_status: true, mediator: '0x7890ABCDEF1234567890abcdef1234567890ABCD', mediator_status: false  },
      ];

      const fetchWagers = async () => {
        try {
          if (!window.ethereum) {
            console.log("error");
            return;
          }
  
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
  
          const contract = new ethers.Contract(contractAddress, contractABI, provider);
  
          const ids = await contract.get_Wagers(address);
          console.log(ids);
          setWagerIds(ids.map(id => id.toString()));
        } catch (err) {
          console.error('Failed to fetch wagers:', err);
        }}

      useEffect(() => {
        fetchWagers();
        });

  return (
    <PageContainer>
      <Header />
      <MainContentWrapper>
        <MainInnerWrapper>
          <TextSection>
            <h1>Pending Wagers</h1>
            <p>All of your pending incoming and outgoing wagers are listed here.</p>
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
