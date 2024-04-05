import React from "react";
import wallet from "../wallet.jpg";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";




function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <img src={wallet} alt="logo" className="frontPageLogo" />
        <h2> Hey There 👋 </h2>
        <h4 className="h4"> Welcome to your Web3 Wallet</h4>
        <Button
          onClick={() => navigate("/yourwallet")}
          className="frontPageButton"
          type="primary"
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Seed Phrase
        </Button>
        <p className="frontPageBottom">
          Find Tokens Details:{" "}
          <a href="https://www.coinbase.com/explore" target="_blank" rel="noreferrer">
            Coinbase Explorer
          </a>
        </p>
        <p className="frontPageBottom">
          Find NFT's from the marketplace: {" "}
          <a href="https://opensea.io/" target="_blank" rel="noreferrer">
            Opensea
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
