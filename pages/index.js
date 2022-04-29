import Head from "next/head";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { providerOptions } from "../core/data/providerOptions";

export default function Home() {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  // initialize Web3Modal Settings on page load
  useEffect(() => {
    const _web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions: providerOptions,
    });
    setWeb3Modal(_web3Modal);
  }, []);

  // Connect Wallet
  const connectWeb3Modal = async () => {
    try {
      const instance = await web3Modal.connect();
      if (instance) {
        const _provider = new ethers.providers.Web3Provider(instance);
        if (_provider) {
          setProvider(_provider);
          const { chainId } = await _provider.getNetwork();
          console.log(chainId);
          const _signer = _provider.getSigner();
          if (_signer) {
            setSigner(_signer);
          } else {
            console.log("No Signer Error");
          }
        }
      }
    } catch (error) {
      console.log("Connection Error: ", error);
    }
  };

  const getBalance = async () => {
    try {
      const _address = await signer.getAddress();
      console.log(_address);
    } catch (error) {
      console.log("Provider Error: ", error);
    }
  };

  const getPositions = async () => {
    try {
    } catch (error) {
      console.log("Provider Error: ", error);
    }
  };

  const getTransactions = async () => {
    try {
    } catch (error) {
      console.log("Provider Error: ", error);
    }
  };

  return (
    <div>
      <Head>
        <title>Vezgo</title>
      </Head>
      <div className="container mx-auto">
        <header></header>
        <section></section>
        <footer></footer>
      </div>
    </div>
  );
}
