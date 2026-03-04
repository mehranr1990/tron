"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useWallet } from "@/context/TronWalletProvider";
import { useEffect } from "react";

export default function WalletDropdown() {
  const { address, balance, energy, network, connect, disconnect, refresh, loading } =
    useWallet();

  useEffect(() => {
    if (address) {
      refresh();
    }
  }, [address]);

  if (!address) {
    return (
      <button
        onClick={connect}
        className="px-4 py-2 rounded-xl bg-primary-600 text-white"
      >
        {loading ? "Connecting..." : "Connect Wallet"}
      </button>
    );
  }

  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800">
        {address.slice(0, 6)}...{address.slice(-4)}
        <ChevronDownIcon className="w-4 h-4" />
      </PopoverButton>

      <PopoverPanel
        anchor={{ to: "bottom end", gap: 12 }}
        className="z-50 w-72 rounded-2xl bg-white dark:bg-neutral-900 shadow-xl p-4 space-y-4"
      >
        <div className="space-y-2 text-sm">

          <div className="flex justify-between">
            <span className="text-neutral-500">Network</span>
            <span className="font-medium">{network}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-500">Balance</span>
            <span className="font-medium">{balance} TRX</span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-500">Energy</span>
            <span className="font-medium">{energy}</span>
          </div>

        </div>

        <button
          onClick={refresh}
          className="w-full py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-sm"
        >
          Refresh
        </button>

        <button
          onClick={disconnect}
          className="w-full py-2 rounded-xl bg-red-500 text-white text-sm"
        >
          Disconnect
        </button>
      </PopoverPanel>
    </Popover>
  );
}