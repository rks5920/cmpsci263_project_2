// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract MediatedWager{

    struct Wager {
            uint256 id;
            address User1;
            address User2;
            address Mediator;

            bool User2Consent;
            bool MediatorConsent;

            uint256 BetSize;
        }

    address payable public owner;
    mapping(uint => Wager) public Wagers;
    mapping(address => uint[]) public Contracts;

    constructor(){
        owner = payable (msg.sender);
    }

    function initWager( address User2, address Mediator, uint256 BetSize) public payable {
        uint id = Wagers.length + 1;
        Wagers[id] = Wager({id: id, User1: msg.sender, User2: User2, Mediator: Mediator, User2Consent: false, MediatorConsent: false, BetSize: BetSize});
        Contracts[msg.sender].push(id);
        Contracts[User2].push(id);
        Contracts[Mediator].push(id);
    }

    function acceptWager_User2(uint id) public payable {
        require(msg.sender == Wagers[id].User2);
        Wagers[id].User2Consent = true;
    }
        

    function acceptWager_Mediator(uint id) public {
        require(msg.sender == Wagers[id].Mediator);
        Wagers[id].MediatorConsent = true;
    }

    function settleWager(uint id, address winner) public {
        require((winner == Wagers[id].User1)||(winner == Wagers[id].User2));

    }

}