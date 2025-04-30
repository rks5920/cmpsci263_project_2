// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract MediatedWager{

    struct Wager {
            uint256 id;
            address User1;
            address User2;
            address Mediator;
            address Winner;
            string Description;

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

    function initWager( address User2, address Mediator, string memory Description, uint256 BetSize) public payable {
        
        require(msg.sender != User2, "You cannot make a wager with yourself");
        require(msg.sender != Mediator, "You cannot mediate your own wager");
        require(User2 != Mediator, "A user cannot be a mediator");
        require(msg.value == BetSize, "Incorrect amount sent to initiate");
        uint id = wagerCount;
        wagerCount++;
        Wagers[id] = Wager({id: id, User1: msg.sender, User2: User2, Mediator: Mediator, User2Consent: false, MediatorConsent: false, Description: Description, BetSize: BetSize, Winner:0x0000000000000000000000000000000000000000, Complete: false});
        Contracts[msg.sender].push(id);
        Contracts[User2].push(id);
        Contracts[Mediator].push(id);
    }

    function acceptWager_User2(uint id) public payable {
        require(msg.sender == Wagers[id].User2, "You are not the designated User2");
        require(msg.value == Wagers[id].BetSize, "You did not sent the correct amount");
        Wagers[id].User2Consent = true;
    }
        

    function acceptWager_Mediator(uint id) public {
        require(msg.sender == Wagers[id].Mediator);
        Wagers[id].MediatorConsent = true;
    }

    function settleWager(uint id, address winner) public {
        require(msg.sender == Wagers[id].Mediator, "Only mediator can settle the wager");
        require(Wagers[id].User2Consent == true, "User 2 has not accepted yet");
        require(Wagers[id].MediatorConsent == true, "Mediator has not accepted yet");
        require(Wagers[id].Complete == false, "This wager has already been settled");
        require((winner == Wagers[id].User1)||(winner == Wagers[id].User2));
        Wagers[id].Winner = winner;

        uint256 payout = Wagers[id].BetSize * 2;

        (Wagers[id].Complete, ) = payable(winner).call{value: payout}("");

    }

    function declineWagerUser2(uint id) public {
        //Refunds user 1 when only user1 has paid and user 2 delines
        require(msg.sender == Wagers[id].User2, "You are not the designated User2");
        require(Wagers[id].User2Consent == false, "User 2 has already accepted");
        require(Wagers[id].Complete == false, "This wager has already been settled");

        uint256 payout = Wagers[id].BetSize;

        (Wagers[id].Complete, ) = payable(Wagers[id].User1).call{value: payout}("");
    }

    function declineWagerMediator1(uint id) public {
        //Refunds user 1 when only user1 has paid and mediator delines
        require(msg.sender == Wagers[id].Mediator, "You are not the designated Mediator");
        require(Wagers[id].User2Consent == false, "User 2 has already accepted");
        require(Wagers[id].Complete == false, "This wager has already been settled");

        uint256 payout = Wagers[id].BetSize;

        (Wagers[id].Complete, ) = payable(Wagers[id].User1).call{value: payout}("");
    }

    function declineWagerMediator2(uint id) public {
        //Refunds user 1 and user 2 when both users have paid and mediator delines
        require(msg.sender == Wagers[id].Mediator);
        require(Wagers[id].User2Consent == true, "User 2 has not accepted");
        require(Wagers[id].Complete == false, "This wager has already been settled");

        uint256 payout = Wagers[id].BetSize;

        (bool sent1, ) = payable(Wagers[id].User1).call{value: payout}("");
        require(sent1, "Failed to refund User1");

        (bool sent2, ) = payable(Wagers[id].User2).call{value: payout}("");
        require(sent2, "Failed to refund User2");

        Wagers[id].Complete = true;
    }

    function get_Wagers(address user) public view returns(uint[] memory) {
        return(Contracts[user]);
    }

    function get_Wager_Status(uint id) public view returns(Wager memory) {
        require(id < wagerCount, "Wager does not exist");
        return(Wagers[id]);
    }
}