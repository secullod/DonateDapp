pragma solidity ^0.8.0;

import "./DonorToken.sol";

contract Campaign {
    string public campaignName;
    string public campaignDescription;
    DonorToken donorToken;

    constructor(string memory _campaignName, string memory _campaignDescription, address donorTokenAddress) {
        campaignName =_campaignName;
        campaignDescription = _campaignDescription;
        donorToken = DonorToken(_donorTokenAddress);
    }

    function donate(uint amount) public payable {
        donorToken.mint(msg.sender, amount);
    }
}
