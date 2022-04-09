pragma solidity ^0.8.0;

import "./DonorToken.sol";
import "./Campaign.sol";

contract CampaignFactory {
    DonorToken donorToken;
    Campaign[] public deployedCampaigns;

    event CampaignCreated(address campaignAddress);

    constructor(address _donorTokenAddress) {
        donorToken = DonorToken(_donorTokenAddress);
    }

    function createCampaign(string memory _campaignName, string memory _campaignDescription) {
        Campaign campaign = new Campaign(_campaignName, _campaignDescription, address(donorToken));
        deployedCampaigns.push(campaign);
        donorToken.addMinterRole(address(campaign));
        emit CampaignCreated(address(campaign));
    }
}
