// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract MediatedWager{

    struct Wager {
            uint256 id;
            address User1;
            address User2;
            address Mediator;
            address Winner;

            bool User2Consent;
            bool MediatorConsent;

            uint256 BetSize;
            bool Complete;
        }

    address payable public owner;
    uint public wagerCount = 0;
    mapping(uint => Wager) public Wagers;
    mapping(address => uint[]) public Contracts;

    constructor(){
        owner = payable (msg.sender);
    }

    function initWager( address User2, address Mediator, uint256 BetSize) public payable {
        uint id = wagerCount;
        wagerCount++;
        Wagers[id] = Wager({id: id, User1: msg.sender, User2: User2, Mediator: Mediator, User2Consent: false, MediatorConsent: false, BetSize: BetSize, Winner:0x0000000000000000000000000000000000000000, Complete: false});
        require(msg.value == BetSize);
        Contracts[msg.sender].push(id);
        Contracts[User2].push(id);
        Contracts[Mediator].push(id);
    }

    function acceptWager_User2(uint id) public payable {
        require(msg.sender == Wagers[id].User2);
        require(msg.value == Wagers[id].BetSize);
        Wagers[id].User2Consent = true;
    }
        

    function acceptWager_Mediator(uint id) public {
        require(msg.sender == Wagers[id].Mediator);
        Wagers[id].MediatorConsent = true;
    }

    function settleWager(uint id, address winner) public {
        require(Wagers[id].User2Consent == true);
        require(Wagers[id].MediatorConsent == true);
        require(Wagers[id].Winner == 0x0000000000000000000000000000000000000000);
        require((winner == Wagers[id].User1)||(winner == Wagers[id].User2));
        Wagers[id].Winner = winner;

        uint256 payout = Wagers[id].BetSize * 2;

        (Wagers[id].Complete, ) = payable(winner).call{value: payout}("");

    }

    function get_Wagers(address user) public view returns(uint[] memory) {
        return(Contracts[user]);
    }

    function get_Wager_Status(uint id) public view returns(Wager memory) {
        return(Wagers[id]);
    }
}