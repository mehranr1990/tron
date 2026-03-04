"use client";

import { useEffect, useState } from "react";
import {
  connectWallet,
  getBalance,
  getEnergy,
  getNetwork,
} from "@/lib/tron";

export const useTronWallet = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>("0");
  const [energy, setEnergy] = useState<number>(0);
  const [network, setNetwork] = useState<string>("Unknown");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async (addr: string) => {
    const [bal, eng, net] = await Promise.all([
      getBalance(addr),
      getEnergy(addr),
      getNetwork(),
    ]);

    setBalance(bal);
    setEnergy(eng);
    setNetwork(net);
  };

  const connect = async () => {
    try {
      setError(null);
      setLoading(true);

      const addr = await connectWallet();
      setAddress(addr);
      await refresh(addr);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const disconnect = () => {
    setAddress(null)
    setBalance("0")
    setEnergy(0)
    setNetwork("Unknown")
  }



    useEffect(() => {
      if (typeof window === "undefined") return;

      if (window.tronWeb?.defaultAddress?.base58) {
        const addr = window.tronWeb.defaultAddress.base58;
        setAddress(addr);
        refresh(addr);
      }

      if (window.tronLink) {
        window.tronLink.on("accountsChanged", () => {
          window.location.reload();
        });

        window.tronLink.on("chainChanged", () => {
          window.location.reload();
        });
      }
    }, []);


  return {
    address,
    balance,
    energy,
    network,
    loading,
    error,
    connect,
    refresh,
    disconnect
  };

};