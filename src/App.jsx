import { useState } from "react";

import "./App.css";
import { AppKitProvider } from "../utils/walletConnectConfig";

import WalletConnection from "./WalletConnection";

function App() {
  return (
    <>
      <AppKitProvider>
        <WalletConnection />
      </AppKitProvider>
    </>
  );
}

export default App;
