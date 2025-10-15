'use client';

import { Users, TrendingUp } from 'lucide-react';
import { Avatar, Name } from '@coinbase/onchainkit/identity';

interface HolderAnalysisProps {
  tokenAddress: string;
}

export default function HolderAnalysis({ tokenAddress }: HolderAnalysisProps) {
  const topHolders = [
    { address: '0x1234...5678', balance: '15.2M', percentage: '12.5%', isFarcaster: true },
    { address: '0x8765...4321', balance: '10.8M', percentage: '8.9%', isFarcaster: false },
    { address: '0xabcd...efgh', balance: '8.5M', percentage: '7.0%', isFarcaster: true },
    { address: '0x9876...1234', balance: '6.2M', percentage: '5.1%', isFarcaster: false },
    { address: '0x5555...9999', balance: '4.8M', percentage: '4.0%', isFarcaster: true },
  ];

  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold">Top Holders</h3>
      </div>

      <div className="space-y-3">
        {topHolders.map((holder, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-surface bg-opacity-50 hover:bg-opacity-70 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <span className="text-xs font-bold text-white">#{index + 1}</span>
              </div>
              <div>
                <div className="text-sm font-medium">{holder.address}</div>
                {holder.isFarcaster && (
                  <div className="text-xs text-primary">Farcaster User</div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{holder.balance}</div>
              <div className="text-xs text-gray-400">{holder.percentage}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-surface bg-opacity-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Total Holders</span>
          <span className="font-bold">1.2M</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">24h Change</span>
          <span className="text-success font-medium flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            +2.5%
          </span>
        </div>
      </div>
    </div>
  );
}
