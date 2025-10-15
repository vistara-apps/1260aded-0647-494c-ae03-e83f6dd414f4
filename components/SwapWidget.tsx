'use client';

import { useState } from 'react';
import { ArrowDown, Settings2, Zap, Info } from 'lucide-react';
import { useAccount } from 'wagmi';

export default function SwapWidget() {
  const { isConnected } = useAccount();
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [slippage, setSlippage] = useState('0.5');

  const handleSwap = () => {
    // Swap logic will be implemented with OnchainKit Transaction component
    console.log('Executing swap...');
  };

  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Gasless Swap</h2>
        <button className="p-2 rounded-lg hover:bg-surface transition-all duration-200">
          <Settings2 className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="space-y-4">
        {/* From Token */}
        <div className="glass-card p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">From</span>
            <span className="text-sm text-gray-400">Balance: 0.00</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.0"
              className="flex-1 bg-transparent text-2xl font-bold outline-none"
            />
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-opacity-80 transition-all duration-200">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-blue-400" />
              <span className="font-medium">USDC</span>
            </button>
          </div>
        </div>

        {/* Swap Direction */}
        <div className="flex justify-center">
          <button className="p-3 rounded-full bg-surface hover:bg-primary transition-all duration-200">
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* To Token */}
        <div className="glass-card p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">To</span>
            <span className="text-sm text-gray-400">Balance: 0.00</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              placeholder="0.0"
              className="flex-1 bg-transparent text-2xl font-bold outline-none"
            />
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-opacity-80 transition-all duration-200">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-success to-green-400" />
              <span className="font-medium">ETH</span>
            </button>
          </div>
        </div>

        {/* Swap Details */}
        <div className="glass-card p-4 rounded-lg space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Rate</span>
            <span className="font-medium">1 USDC = 0.00031 ETH</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Slippage</span>
            <span className="font-medium">{slippage}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-gray-400">
              <Zap className="w-4 h-4 text-warning" />
              <span>Gas Fee</span>
            </div>
            <span className="font-medium text-success">Sponsored</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Route</span>
            <span className="font-medium text-primary">Best Price via 0x</span>
          </div>
        </div>

        {/* Swap Button */}
        {isConnected ? (
          <button
            onClick={handleSwap}
            disabled={!fromAmount || !toAmount}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Swap Tokens
          </button>
        ) : (
          <button className="btn-primary w-full">
            Connect Wallet to Swap
          </button>
        )}

        {/* Info Banner */}
        <div className="flex items-start gap-3 p-4 rounded-lg bg-primary bg-opacity-10 border border-primary border-opacity-20">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-300">
            <span className="font-medium text-primary">Gasless Trading:</span> All swap transactions are sponsored. You only pay for the tokens you're swapping.
          </div>
        </div>
      </div>
    </div>
  );
}
