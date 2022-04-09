import {ethers} from "hardhat";
import chai from "chai";
import {solidity} from "ethereum-waffle";
import {ArkaniaAuction__factory, ArkaniaNfts__factory, ArkaniaSplitter__factory} from "../src/index";
import {utils} from "ethers";

chai.use(solidity);
const {expect} = chai;

const baseTokenURI = "ipfs://QmderjzRj2tqHayQa7Nx6rfcTBFutMYxEA7Ap4wjoxzUJa/";
const contractURI = "ipfs://QmWaxK15PU226iB3D9mFxmj9pPGPByutzb9gTX1PUwERZX";
const nftsContractName = "ArkaniaNfts";
const auctionContractName = "ArkaniaAuction";
const auctionStartingBid = "0.04";
const splitterContractName = "ArkaniaSplitter";
const nftForAuction = 0;

const paymentSplit = [20, 40, 40];
const royaltyFeeInBips = 250;

describe("Token", () => {
    let tokenAddress: string;

    // beforeEach(async () => {
    //     const [deployer, owner, receiver1, receiver2, receiver3,] = await ethers.getSigners();
    //     const paymentReceivers = [receiver1, receiver2, receiver3];
    //     const splitterFactory = new ArkaniaSplitter__factory(deployer)
    //     const splitterContract = await splitterFactory.deploy(paymentReceivers, paymentSplit)
    //     const nftFactory = new ArkaniaNfts__factory(deployer);
    //     const nftContract = await nftFactory.deploy(baseTokenURI, royaltyFeeInBips, contractURI, splitterContract.address);
    //     const auctionFactory = new ArkaniaAuction__factory(deployer)
    //     const auctionContract = await auctionFactory.deploy(nftContract.address, nftForAuction, auctionStartingBid)
    //
    //     expect(await nftContract.totalSupply()).to.eq(0);
    // });

    it("Should mint some tokens", async () => {
        const [deployer, owner, receiver1, receiver2, receiver3,] = await ethers.getSigners();
        const paymentReceivers = [receiver1.address, receiver2.address, receiver3.address];
        const splitterFactory = new ArkaniaSplitter__factory(deployer)
        const splitterContract = await splitterFactory.deploy(paymentReceivers, paymentSplit)
        const nftFactory = new ArkaniaNfts__factory(deployer);
        const nftContract = await nftFactory.deploy(baseTokenURI, royaltyFeeInBips, contractURI, splitterContract.address);
        const auctionFactory = new ArkaniaAuction__factory(deployer)
        const startBid = ethers.utils.parseEther(".04");
        const toAuction = ethers.utils.parseEther("0");
        const auctionContract = await auctionFactory.deploy(nftContract.address, toAuction, startBid)
        const toMint = "1"
        await nftContract.launchProject()
        await nftContract.mint({value: utils.parseEther("0.001")});
        expect(await nftContract.balanceOf(deployer.address)).to.eq(toMint);

    });
    //
    // it('should create a new campaign with address');
    // it('should transfer donerTokens when a campagin receives a donation');
    // it('should allow campaign owner to withdraw ether balance');
    // it('should mint a donerNFT upon doner request');
    // it('should allow user to enter raffle with a donerToken');
    // it('should have outside doner royalty account')

    it("Should transfer tokens between users", async () => {
        const [deployer, owner, receiver1, receiver2, receiver3, send, rec] = await ethers.getSigners();
        const paymentReceivers = [receiver1.address, receiver2.address, receiver3.address];
        const splitterFactory = new ArkaniaSplitter__factory(deployer)
        const splitterContract = await splitterFactory.deploy(paymentReceivers, paymentSplit)
        const nftFactory = new ArkaniaNfts__factory(deployer);
        const nftContract = await nftFactory.deploy(baseTokenURI, royaltyFeeInBips, contractURI, splitterContract.address);
        const auctionFactory = new ArkaniaAuction__factory(deployer)
        const startBid = ethers.utils.parseEther(".04");
        const toAuction = ethers.utils.parseEther("0");
        const auctionContract = await auctionFactory.deploy(nftContract.address, toAuction, startBid)
        const toMint = "1"
        await nftContract.launchProject()
        await nftContract.mint({value: utils.parseEther("0.001")});
        expect(await nftContract.balanceOf(deployer.address)).to.eq(toMint);

        const senderInstance = await nftContract.transferFrom(deployer.address, rec.address, 0)


        expect(await nftContract.balanceOf(rec.address)).to.eq(1);
    });
    //
    it("Should fail to transfer with low balance", async () => {
        const [deployer, owner, receiver1, receiver2, receiver3, send, rec] = await ethers.getSigners();
        const paymentReceivers = [receiver1.address, receiver2.address, receiver3.address];
        const splitterFactory = new ArkaniaSplitter__factory(deployer)
        const splitterContract = await splitterFactory.deploy(paymentReceivers, paymentSplit)
        const nftFactory = new ArkaniaNfts__factory(deployer);
        const nftContract = await nftFactory.deploy(baseTokenURI, royaltyFeeInBips, contractURI, splitterContract.address);
        const auctionFactory = new ArkaniaAuction__factory(deployer)
        const startBid = ethers.utils.parseEther(".04");
        const toAuction = ethers.utils.parseEther("0");
        const auctionContract = await auctionFactory.deploy(nftContract.address, toAuction, startBid)
        let toMint = "1"
        await nftContract.launchProject()
        await nftContract.mint({value: utils.parseEther("0.001")});
        expect(await nftContract.balanceOf(deployer.address)).to.eq(toMint);

        // Notice await is on the expect
        await expect(nftContract.transferFrom(send.address, rec.address, 0)).to.be.revertedWith(
            "ERC721: transfer from incorrect owner",
        );

    });

    it("Should return correct baseURI", async () => {
        const [deployer, owner, receiver1, receiver2, receiver3, send, rec] = await ethers.getSigners();
        const paymentReceivers = [receiver1.address, receiver2.address, receiver3.address];
        const splitterFactory = new ArkaniaSplitter__factory(deployer)
        const splitterContract = await splitterFactory.deploy(paymentReceivers, paymentSplit)
        const nftFactory = new ArkaniaNfts__factory(deployer);
        const nftContract = await nftFactory.deploy(baseTokenURI, royaltyFeeInBips, contractURI, splitterContract.address);
        const auctionFactory = new ArkaniaAuction__factory(deployer)
        const startBid = ethers.utils.parseEther(".04");
        const toAuction = ethers.utils.parseEther("0");
        const auctionContract = await auctionFactory.deploy(nftContract.address, toAuction, startBid)
        // Notice await is on the expect
        await expect(await nftContract.baseTokenURI()).to.equal(baseTokenURI);

    });

    it("Should return correct contractURI", async () => {
        const [deployer, owner, receiver1, receiver2, receiver3, send, rec] = await ethers.getSigners();
        const paymentReceivers = [receiver1.address, receiver2.address, receiver3.address];
        const splitterFactory = new ArkaniaSplitter__factory(deployer)
        const splitterContract = await splitterFactory.deploy(paymentReceivers, paymentSplit)
        const nftFactory = new ArkaniaNfts__factory(deployer);
        const nftContract = await nftFactory.deploy(baseTokenURI, royaltyFeeInBips, contractURI, splitterContract.address);
        const auctionFactory = new ArkaniaAuction__factory(deployer)
        const startBid = ethers.utils.parseEther(".04");
        const toAuction = ethers.utils.parseEther("0");
        const auctionContract = await auctionFactory.deploy(nftContract.address, toAuction, startBid)
        // Notice await is on the expect
        await expect(await nftContract.contractURI()).to.equal(contractURI);

    });

    it("Should fail to transfer with low bace", async () => {
        const [deployer, owner, receiver1, receiver2, receiver3, send, rec] = await ethers.getSigners();
        const paymentReceivers = [receiver1.address, receiver2.address, receiver3.address];
        const splitterFactory = new ArkaniaSplitter__factory(deployer)
        const splitterContract = await splitterFactory.deploy(paymentReceivers, paymentSplit)
        const nftFactory = new ArkaniaNfts__factory(deployer);
        const nftContract = await nftFactory.deploy(baseTokenURI, royaltyFeeInBips, contractURI, splitterContract.address);
        const auctionFactory = new ArkaniaAuction__factory(deployer)
        const startBid = ethers.utils.parseEther(".04");
        const toAuction = ethers.utils.parseEther("0");
        const auctionContract = await auctionFactory.deploy(nftContract.address, toAuction, startBid)
        let toMint = "1"


        // Notice await is on the expect
        await expect(nftContract.mint({value: utils.parseEther("0.001")})
        ).to.be.revertedWith(
            "The project is not yet launched",
        );
    });

    it("Should fail mint to an existing nft holder", async () => {
        const [deployer, owner, receiver1, receiver2, receiver3, send, rec] = await ethers.getSigners();
        const paymentReceivers = [receiver1.address, receiver2.address, receiver3.address];
        const splitterFactory = new ArkaniaSplitter__factory(deployer)
        const splitterContract = await splitterFactory.deploy(paymentReceivers, paymentSplit)
        const nftFactory = new ArkaniaNfts__factory(deployer);
        const nftContract = await nftFactory.deploy(baseTokenURI, royaltyFeeInBips, contractURI, splitterContract.address);
        const auctionFactory = new ArkaniaAuction__factory(deployer)
        const startBid = ethers.utils.parseEther(".04");
        const toAuction = ethers.utils.parseEther("0");
        const auctionContract = await auctionFactory.deploy(nftContract.address, toAuction, startBid)
        let toMint = "1"
        await nftContract.launchProject()
        await nftContract.mint({value: utils.parseEther("0.001")});

        // Notice await is on the expect
        await expect(nftContract.mint({value: utils.parseEther("0.001")})
        ).to.be.revertedWith(
            "Can only mint 1 NFT per customer"
        );
    });

    it("Should fail mint to an existing nft holder", async () => {
        const [deployer, owner, receiver1, receiver2, receiver3, send, rec] = await ethers.getSigners();
        const paymentReceivers = [receiver1.address, receiver2.address, receiver3.address];
        const splitterFactory = new ArkaniaSplitter__factory(deployer)
        const splitterContract = await splitterFactory.deploy(paymentReceivers, paymentSplit)
        const nftFactory = new ArkaniaNfts__factory(deployer);
        const nftContract = await nftFactory.deploy(baseTokenURI, royaltyFeeInBips, contractURI, splitterContract.address);
        const auctionFactory = new ArkaniaAuction__factory(deployer)
        const startBid = ethers.utils.parseEther(".04");
        const toAuction = ethers.utils.parseEther("0");
        const auctionContract = await auctionFactory.deploy(nftContract.address, toAuction, startBid)
        let toMint = "1"

        const bal2 = await nftContract.provider.getBalance(deployer.address)
        const ans2 =  ethers.utils.formatEther( bal2)
        await nftContract.launchProject()
        await nftContract.mint({value: utils.parseEther("0.001")});
        const bal = await nftContract.balanceOf(nftContract.address)
        const ans =  bal.toNumber()
        const bal1 = await nftContract.provider.getBalance(nftContract.address)
        const ans1 =  ethers.utils.formatEther( bal1)

        await nftContract.withdraw()

        const bal3 = await nftContract.provider.getBalance(nftContract.address)
        const ans3 =  ethers.utils.formatEther( bal3)

        const bal4 = await splitterContract.provider.getBalance(splitterContract.address)
        const ans4 =  ethers.utils.formatEther( bal4)

        const bal5 = await nftContract.provider.getBalance(receiver1.address)
        const ans5 =  ethers.utils.formatEther( bal5)

        await splitterContract["release(address)"](receiver1.address)

        const bal6 = await splitterContract.provider.getBalance(splitterContract.address)
        const ans6 =  ethers.utils.formatEther( bal6)

        const bal7 = await splitterContract.provider.getBalance(receiver1.address)
        const ans7 =  ethers.utils.formatEther( bal7)


        // Notice await is on the expect
        await expect(nftContract.mint({value: utils.parseEther("0.001")})
        ).to.be.revertedWith(
            "Can only mint 1 NFT per customer"
        );
    });
});
