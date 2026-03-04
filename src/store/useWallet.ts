"use client";

import { create } from "zustand";
import { connectWallet, getBalance, getEnergy, getNetwork } from "@/lib/tron";

interface WalletState {
  address: string | null;
  balance: string | null;
  energy: number | null;
  network: string | null;
  loading: boolean;

  connect: () => Promise<void>;
  disconnect: () => void;
  refresh: () => Promise<void>;
}

export const useWallet = create<WalletState>((set, get) => ({
  address: null,
  balance: null,
  energy: null,
  network: null,
  loading: false,

  connect: async () => {
    try {
      set({ loading: true });

      const address = await connectWallet();
      const balance = await getBalance(address);
      const energy = await getEnergy(address);
      const network = await getNetwork();

      set({
        address,
        balance,
        energy,
        network,
      });
    } finally {
      set({ loading: false });
    }
  },

  disconnect: () => {
    set({
      address: null,
      balance: null,
      energy: null,
      network: null,
    });
  },

  refresh: async () => {
    const { address } = get();
    if (!address) return;

    const balance = await getBalance(address);
    const energy = await getEnergy(address);
    const network = await getNetwork();

    set({ balance, energy, network });
  },
}));