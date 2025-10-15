'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Copy, Share2, Star } from 'lucide-react';

interface TokenDetailsProps {
  tokenAddress: string;
}

export default function TokenDetails({ tokenAddress }: TokenDetailsProps) {
  const [tokenData, setTokenData] = useState({
    name: 'USD Coin',
    symbol: 'USDC',
    price: '$1.00',
    marketCap: '$24.5B',
    volume24h: '$4.2B',
    liquidity: '$850M',
    holders: '1.2M',
    change24h: '+0.02%',
  });

  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{tokenData.symbol[0]}</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{tokenData.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-400">{tokenData.symbol}</span>
              <button
                onClick={copyAddress}
                className="text-xs text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                {tokenAddress.slice(0, 6)}...{tokenAddress.slice(-4)}
                {copied ? (
                  <span className="text-success">✓</span>
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="p-2 rounded-lg hover:bg-surface transition-all duration-200">
            <Star className="w-5 h-5 text-gray-400 hover:text-warning" />
          </button>
          <button className="p-2 rounded-lg hover:bg-surface transition-all duration-200">
            <Share2 className="w-5 h-5 text-gray-400 hover:text-primary" />
          </button>
          <button className="p-2 rounded-lg hover:bg-surface transition-all duration-200">
            <ExternalLink className="w-5 h-5 text-gray-400 hover:text-primary" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="metric-card">
          <div className="text-sm text-gray-400 mb-1">Price</div>
          <div className="text-xl font-bold">{tokenData.price}</div>
          <div className="text-xs text-success mt-1">{tokenData.change24h}</div>
        </div>

        <div className="metric-card">
          <div className="text-sm text-gray-400 mb-1">Market Cap</div>
          <div className="text-xl font-bold">{tokenData.marketCap}</div>
        </div>

        <div className="metric-card">
          <div className="text-sm text-gray-400 mb-1">24h Volume</div>
          <div className="text-xl font-bold">{tokenData.volume24h}</div>
        </div>

        <div className="metric-card">
          <div className="text-sm text-gray-400 mb-1">Liquidity</div>
          <div className="text-xl font-bold">{tokenData.liquidity}</div>
        </div>
      </div>
    </div>
  );
}
