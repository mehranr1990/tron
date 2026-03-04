"use client";

import { parseTronError, TronWalletError } from "./tronErrors";

declare global {
  interface Window {
    tronLink?: any;
    tronWeb?: any;
  }
}

const ensureClient = () => {
  if (typeof window === "undefined") {
    throw new TronWalletError("Wallet only available in browser");
  }
};
export const getTronWeb = () => {
  ensureClient();

  if (!window.tronWeb) {
    throw new TronWalletError("No TRON wallet detected");
  }

  const address = window.tronWeb?.defaultAddress?.base58;

  if (!address) {
    throw new TronWalletError("Wallet not connected");
  }

  return window.tronWeb;
};

export const connectWallet = async (): Promise<string> => {
  ensureClient();

  // اگر از قبل وصل شده
  if (window.tronWeb?.defaultAddress?.base58) {
    return window.tronWeb.defaultAddress.base58;
  }

  // حالت TronLink
  if (window.tronLink?.request) {
    await window.tronLink.request({
      method: "tron_requestAccounts",
    });

    // صبر کن tronWeb آماده شه
    await waitForTronWeb();

    const address = window.tronWeb?.defaultAddress?.base58;
    if (!address) throw new Error("Wallet connection failed");

    return address;
  }

  // حالت Trust (بدون tronLink)
  if (window.tronWeb) {
    await waitForTronWeb();

    const address = window.tronWeb?.defaultAddress?.base58;
    if (!address) throw new Error("Wallet not approved");

    return address;
  }

  throw new Error("No TRON wallet detected");
};
const waitForTronWeb = async (timeout = 5000) => {
  const start = Date.now();

  return new Promise<void>((resolve, reject) => {
    const check = () => {
      if (window.tronWeb?.defaultAddress?.base58) {
        resolve();
      } else if (Date.now() - start > timeout) {
        reject(new Error("Wallet connection timeout"));
      } else {
        setTimeout(check, 200);
      }
    };

    check();
  });
};
export const detectWallet = () => {
  if (typeof window === "undefined") return "None";

  if (window.tronLink) return "TronLink";
  if (window.tronWeb) return "Injected Wallet";

  return "None";
};

export const getBalance = async (address: string) => {
  try {
    const tronWeb = getTronWeb();
    if (!address || !tronWeb.isAddress(address)) return "0";
    const balance = await tronWeb.trx.getBalance(address);
    return tronWeb.fromSun(balance);
  } catch (err: any) {
    return "0" 
  }
};

export const getEnergy = async (address: string) => {
  try {
    const tronWeb = getTronWeb();
    if (!address || !tronWeb.isAddress(address)) {
      console.warn("getEnergy: Invalid address skipped", address);
      return 0;
    }
    const resources = await tronWeb.trx.getAccountResources(address);
    const limit = resources?.EnergyLimit || 0;
    const used = resources?.EnergyUsed || 0;
    
    return limit - used;
  } catch (err: any) {
    return 0; 
  }
};

export const sendTRX = async (
  to: string,
  amount: number
) => {
  try {
    const tronWeb = getTronWeb();

    if (!tronWeb.isAddress(to)) {
      throw new TronWalletError("Invalid recipient address");
    }

    const tx = await tronWeb.trx.sendTransaction(
      to,
      tronWeb.toSun(amount)
    );

    return tx;
  } catch (err: any) {
    throw new TronWalletError(parseTronError(err));
  }
};

export const getNetwork = async (): Promise<string> => {
  try {
    const tronWeb = getTronWeb();
    const host = tronWeb.fullNode.host;

    if (host.includes("trongrid")) return "Mainnet";
    if (host.includes("shasta")) return "Shasta";
    return "Unknown";
  } catch (err: any) {
    throw new TronWalletError(parseTronError(err));
  }
};