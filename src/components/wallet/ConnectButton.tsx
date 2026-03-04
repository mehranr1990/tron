"use client";

import { useWallet } from "@/context/TronWalletProvider";

export default function ConnectButton() {
  const { address, connect, loading } = useWallet();

  if (address) {
    return (
      <button>
        {address.slice(0, 6)}...{address.slice(-4)}
      </button>
    );
  }

  return (
    <button onClick={connect} disabled={loading}>
      {loading ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}