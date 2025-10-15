'use client';

import { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';

interface TokenSearchProps {
  onTokenSelect: (address: string) => void;
}

export default function TokenSearch({ onTokenSelect }: TokenSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const trendingTokens = [
    { symbol: 'USDC', name: 'USD Coin', address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913' },
    { symbol: 'WETH', name: 'Wrapped Ether', address: '0x4200000000000000000000000000000000000006' },
    { symbol: 'DAI', name: 'Dai Stablecoin', address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb' },
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      onTokenSelect(searchQuery);
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by token address, symbol, or name..."
          className="input-field w-full pl-12 pr-4"
        />
        <button
          type="submit"
          disabled={isSearching}
          className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2 px-4 text-sm"
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Trending on Base</h3>
        </div>
        <div className="space-y-3">
          {trendingTokens.map((token) => (
            <button
              key={token.address}
              onClick={() => onTokenSelect(token.address)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{token.symbol[0]}</span>
                </div>
                <div className="text-left">
                  <div className="font-medium">{token.symbol}</div>
                  <div className="text-sm text-gray-400">{token.name}</div>
                </div>
              </div>
              <div className="text-success text-sm font-medium">+12.5%</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
