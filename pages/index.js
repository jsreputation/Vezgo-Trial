import Head from "next/head";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { providerOptions } from "../core/data/providerOptions";

export default function Home() {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const [network, setNetwork] = useState(0);
  const [address, setAddress] = useState(null);
  // initialize Web3Modal Settings on page load
  // useEffect(() => {
  //   const _web3Modal = new Web3Modal({
  //     network: "mainnet",
  //     cacheProvider: true,
  //     providerOptions: providerOptions,
  //   });
  //   setWeb3Modal(_web3Modal);
  // }, []);

  // Connect Wallet
  // const connectWeb3Modal = async () => {
  //   try {
  //     const instance = await web3Modal.connect();
  //     if (instance) {
  //       const _provider = new ethers.providers.Web3Provider(instance);
  //       if (_provider) {
  //         setProvider(_provider);
  //         const { chainId } = await _provider.getNetwork();
  //         console.log(chainId);
  //         const _signer = _provider.getSigner();
  //         if (_signer) {
  //           setSigner(_signer);
  //         } else {
  //           console.log("No Signer Error");
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Connection Error: ", error);
  //   }
  // };

  useEffect(() => {
    if (network && address) {
      console.log("dddddddd");
      connectProvider();
    }
  }, [network, address]);

  const connectProvider = async () => {
    try {
      const _provider = new ethers.providers.EtherscanProvider(
        network,
        "FM89RHIEKVUX6YP587FWWDG52J1XZGS7NC"
      );
      if (_provider) {
        const history = await _provider.getHistory(address);
        const balance = await _provider.getBalance(address);

        console.log(history);
        console.log(ethers.utils.formatEther(balance));
      }
    } catch (error) {}
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

  const changeNetwork = (network) => {
    console.log(network.target.value);
    setNetwork(network.target.value);
  };

  const changeAddress = (address) => {
    console.log(address.target.value);
    setAddress(address.target.value);
  };

  return (
    <div>
      <Head>
        <title>Vezgo</title>
      </Head>
      <div className="container mx-auto">
        <header className="mt-5">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Wallet Address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm"> Address </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 pr-15 sm:text-sm border-gray-300 rounded-md"
              placeholder="0x..."
              onChange={changeAddress}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Network
              </label>
              <select
                id="network"
                name="currency"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-amber-300 bg-transparent text-gray-500 sm:text-sm rounded-md"
                onChange={changeNetwork}
              >
                <option value="homestead">Ethereum Mainnet</option>
                <option value="ropsten">Ropsten</option>
                <option value="rinkeby">Kovan</option>
                <option value="goerli">Goerli</option>
                <option value="rinkeby">Rinkeby</option>
              </select>
            </div>
          </div>
        </header>
        <section></section>
        <footer></footer>
      </div>
    </div>
  );
}
