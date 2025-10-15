'use client';

import { useState } from 'react';
import { Bell, Plus, TrendingUp, TrendingDown, Star } from 'lucide-react';

export default function WatchlistPanel() {
  const [watchlist] = useState([
    {
      symbol: 'USDC',
      name: 'USD Coin',
      price: '$1.00',
      change: '+0.02%',
      alert: 'Price > $1.01',
      trending: 'up',
    },
    {
      symbol: 'WETH',
      name: 'Wrapped Ether',
      price: '$3,245.50',
      change: '+2.5%',
      alert: 'Volume > 1M',
      trending: 'up',
    },
    {
      symbol: 'DAI',
      name: 'Dai Stablecoin',
      price: '$0.999',
      change: '-0.01%',
      alert: 'Price < $0.99',
      trending: 'down',
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">My Watchlist</h2>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Token
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {watchlist.map((token, index) => (
          <div key={index} className="glass-card p-6 rounded-lg hover:bg-opacity-70 transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{token.symbol[0]}</span>
                </div>
                <div>
                  <div className="font-bold">{token.symbol}</div>
                  <div className="text-sm text-gray-400">{token.name}</div>
                </div>
              </div>
              <button className="p-2 rounded-lg hover:bg-surface transition-all duration-200">
                <Star className="w-5 h-5 text-warning fill-warning" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{token.price}</span>
                <span className={`flex items-center gap-1 text-sm font-medium ${
                  token.trending === 'up' ? 'text-success' : 'text-danger'
                }`}>
                  {token.trending === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {token.change}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface bg-opacity-50">
                <div className="flex items-center gap-2 text-sm">
                  <Bell className="w-4 h-4 text-primary" />
                  <span className="text-gray-400">Alert:</span>
                  <span className="font-medium">{token.alert}</span>
                </div>
              </div>
            </div>

            <button className="btn-secondary w-full mt-4 text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>

      {watchlist.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center mx-auto mb-6">
            <Bell className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No Tokens in Watchlist</h3>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            Add tokens to your watchlist to track prices and set custom alerts
          </p>
          <button className="btn-primary">
            Add Your First Token
          </button>
        </div>
      )}
    </div>
  );
}
