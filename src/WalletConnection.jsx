import { useState } from "react";
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";

function WalletConnection() {
  const { open, close } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { walletInfo } = useWalletInfo();
  const { address, isConnecting, isDisconnected } = useAccount();
  //creating handlers incase want to add more functionality to connect/ disconnect events(optional)
  const connectWallet = async () => {
    try {
      open();
    } catch (ex) {
      console.log(ex?.message);
    }
  };
  const handleDisconnectWallet = async () => {
    disconnect();
  };
  return (
    <>
      <p>Wallet connect v2</p>
      <button
        onClick={connectWallet}
        style={{ background: "blue", color: "whitesmoke" }}
      >
        {address ? "switch wallet" : "connect wallet"}
      </button>
      {walletInfo ? (
        <p>
          <img
            style={{ width: "1.2rem", height: "1.2rem" }}
            src={walletInfo.icon}
          />
          &nbsp;{walletInfo.name}&nbsp; {address}
        </p>
      ) : (
        <p></p>
      )}
      {address ? (
        <button
          onClick={handleDisconnectWallet}
          style={{ background: "grey", color: "white" }}
        >
          disconnect wallet
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

export default WalletConnection;
