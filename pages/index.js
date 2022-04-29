import Head from "next/head";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

export default function Home() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {});
  return (
    <div>
      <Head>
        <title>Vezgo</title>
      </Head>
      <div>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}
