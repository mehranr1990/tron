"use client";

import { createContext, useContext } from "react";
import { useTronWallet } from "@/hooks/useTronWallet";

const TronWalletContext = createContext<any>(null);

export const TronWalletProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const wallet = useTronWallet();

  return (
    <TronWalletContext.Provider value={wallet}>
      {children}
    </TronWalletContext.Provider>
  );
};

export const useWallet = () => useContext(TronWalletContext);