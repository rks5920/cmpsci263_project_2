import { useRouter } from 'next/router';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Context initialization
const Context = createContext();

export const StateContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [prevDest, setPrev] = useState("/");
  const [currentDest, setCurrent] = useState("/");
  const [qrCode, setqrCode] = useState("/");

  // MetaMask state
  const [account, setAccount] = useState(null);
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false);

  const contractABI = [
    
    [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "acceptWager_Mediator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "acceptWager_User2",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "declineWagerMediator1",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "declineWagerMediator2",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "declineWagerUser2",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "User2",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "Mediator",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "Description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "BetSize",
            "type": "uint256"
          }
        ],
        "name": "initWager",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winner",
            "type": "address"
          }
        ],
        "name": "settleWager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "Contracts",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_Wager_Status",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "User1",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "User2",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "Mediator",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "Winner",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "Description",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "User2Consent",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "MediatorConsent",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "BetSize",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "Complete",
                "type": "bool"
              }
            ],
            "internalType": "struct MediatedWager.Wager",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "get_Wagers",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "wagerCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "Wagers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "User1",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "User2",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "Mediator",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "Winner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "Description",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "User2Consent",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "MediatorConsent",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "BetSize",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "Complete",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
    
  ];
  
  const contractAddress = "0x10977c90292e7128f927382a7883bb7ffe651479";

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      setIsMetaMaskAvailable(true);
      // Auto-load account if already connected
      window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      });
    }
  }, []);

  const connectMetaMask = async () => {
    console.log("MetaMask connect button clicked");

    if (!isMetaMaskAvailable) {
      alert('MetaMask is not installed.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      console.log("Connected account:", accounts[0]);
    } catch (err) {
      console.error("MetaMask connection error:", err);
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        account,
        setAccount,  
        connectMetaMask,
        prevDest,
        setPrev,
        currentDest,
        setCurrent,
        qrCode,
        setqrCode,
        contractABI,        
        contractAddress     
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
