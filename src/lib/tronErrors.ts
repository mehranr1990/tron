export class TronWalletError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "TronWalletError";
    }
  }
  
  export const parseTronError = (error: any): string => {
    if (!error) return "Unknown error";
  
    if (error.message?.includes("User rejected")) {
      return "Transaction rejected by user";
    }
  
    if (error.message?.includes("not installed")) {
      return "TronLink wallet is not installed";
    }
  
    if (error.message?.includes("Invalid address")) {
      return "Invalid wallet address";
    }
  
    return error.message || "Unexpected wallet error";
  };