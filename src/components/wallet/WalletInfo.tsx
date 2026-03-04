"use client";

import { useWallet } from "@/context/TronWalletProvider";

export default function WalletInfo() {
  const { address, balance, energy, network } = useWallet();

  if (!address) return null;

  return (
    <div>
   
    </div>
  );
}