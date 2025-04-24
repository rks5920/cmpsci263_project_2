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

    struct Account {
        address User;
        uint[] Contracts;

    }

    address payable public owner;
    Wager[] public Wagers;

    constructor(){
        owner = payable (msg.sender);
    }

    function initWager(uint256 id, address User2, address Mediator, uint256 BetSize) public payable {
        Wagers.push(Wager({id: id, User1: msg.sender, User2: User2, Mediator: Mediator, User2Consent: false, MediatorConsent: false, BetSize: BetSize}));
    }

}