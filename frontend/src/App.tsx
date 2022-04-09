import "./App.css";
import {
    Container,
    Col,
    Card,
    Button,
    InputGroup,
    FormControl,
    Image,
} from "react-bootstrap";
import metamaskImg from "./metamask.png";
import {ethers, utils} from "ethers";
import {useEffect, useState} from "react";
import {ArkaniaAuction__factory} from "@crypto/contracts";
import type {ArkaniaAuction} from "@crypto/contracts";
const auctionAddress = "0x8A1758e27703C7881f0Dc2fB6B5C86c470678121";

declare global {
    interface Window {
        ethereum: any;
    }
}

function App() {
    const [bid, setBid] = useState("");
    const [bidAmount, setBidAmount] = useState("");
    const [endTime, setEndTime] = useState("");
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let contract = ArkaniaAuction__factory.connect(auctionAddress, provider);
        getAuctionEndTime();
        getHighestBid();

        function getAuctionEndTime() {
            contract
                .endAt()
                .then((endTime) =>
                    setEndTime(
                        new Date(endTime.toNumber() * 1000).toLocaleString("en-US")
                    )
                );
        }

        function getHighestBid() {
            contract.highestBid().then((bid) => setBid(utils.formatEther(bid)));
        }
    }, []);

    const connectAccount = getContractWithSigner;

    function getContractWithSigner() {
        return provider
            .send("eth_requestAccounts", [])
            .then(() => provider.getSigner())
            .then(
                (signer) => ArkaniaAuction__factory.connect(auctionAddress, signer)
            );
    }

    async function handleBid() {
        getContractWithSigner().then((contract) => placeBid(contract));
    }

    function placeBid(contract: ArkaniaAuction) {
        contract
            .bid({value: utils.parseEther(bidAmount)})
            .then((transaction) => provider.waitForTransaction(transaction.hash))
            .then(() => window.location.reload());
    }

    return (
        <Container>
            <Button onClick={() => connectAccount()} id="metamask">
                <Image src={metamaskImg} id="metamask-image"/>
                connect
            </Button>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <strong>Arkania Nfts</strong>
                        </Card.Title>
                        <Card.Text>
                            One of the 10 first NFTs released from Arkania's private
                            collection of squirrels
                        </Card.Text>
                        <Card.Text>
                            Auction ends on <strong>{endTime}</strong>
                        </Card.Text>
                        <Card.Text>
                            Current Bid: <strong>{bid} </strong>
                            <i className="fa fa-ethereum"/>
                        </Card.Text>
                        <InputGroup>
                            <FormControl
                                placeholder="Enter bid here..."
                                onChange={(e) => setBidAmount(e.target.value)}
                            />
                            <Button onClick={() => handleBid()}>
                                <i className="fa fa-ethereum"/> bid
                            </Button>
                        </InputGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Image
                    id="nft-image"
                    src="https://opensea.mypinata.cloud/ipfs/QmPtWUs1H1e74hYZH1BeJcYnF51gjrEFLtMvCdrCyQFzu6/00.png"
                />
            </Col>
        </Container>
    );
}

export default App;