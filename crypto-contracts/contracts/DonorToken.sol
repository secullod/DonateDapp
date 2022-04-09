pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DonorToken is ERC20, ERC20Burnable, AccessControl, Ownable {

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    address public campaignFactory;

    constructor(address _campaignFactory) ERC20("DonorToken", "DNT") {
        campaignFactory = _campaignFactory;
    }

    modifier correctDenomination {
        require(msg.value % 1 ether == 0, "please purchase in denominations of ether");
        _;
    }

    modifier correctValue(uint amount) {
        require(msg.value == amount, "please send correct amount of ether");
        _;
    }

    modifier onlyCampaignFactory {
        require(msg.sender == campaignFactory, "only the campaign factory can add minters");
        _;
    }

    modifier isMinter {
        require(hasRole(MINTER_ROLE, msg.sender), "Caller is not a minter");
        _;
    }

    function setCampaignFactory(address _campaignFactoryAddress) onlyOwner {
        campaignFactory = _campaignFactoryAddress;
    }

    function addMinterRole(address campaignAddress) public onlyCampaignFactory {
        _setupRole(MINTER_ROLE, campaignAddress);
    }

    function mint(address to, uint256 amount) public isMinter {
        _mint(to, amount);
    }

    function purchaseTokens(address payable _purchaser, uint _amount) public payable correctDenomination correctValue {
        _mint(_purchaser, _amount);
    }
}