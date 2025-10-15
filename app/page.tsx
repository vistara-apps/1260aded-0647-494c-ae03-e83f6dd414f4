'use client';

import { useState } from 'react';
import { Search, TrendingUp, Shield, Zap, Users, Bell } from 'lucide-react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Identity } from '@coinbase/onchainkit/identity';
import TokenSearch from '@/components/TokenSearch';
import TokenDetails from '@/components/TokenDetails';
import SwapWidget from '@/components/SwapWidget';
import SafetyScore from '@/components/SafetyScore';
import HolderAnalysis from '@/components/HolderAnalysis';
import WatchlistPanel from '@/components/WatchlistPanel';
import { useAccount } from 'wagmi';

export default function Home() {
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'search' | 'swap' | 'watchlist'>('search');
  const { address, isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="glass-card border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">TokenScope</h1>
                <p className="text-xs text-gray-400">Base Network</p>
              </div>
            </div>
            
            <Wallet>
              <ConnectWallet>
                {isConnected ? (
                  <Identity address={address} schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9">
                    <Avatar />
                    <Name />
                  </Identity>
                ) : (
                  <button className="btn-primary text-sm">
                    Connect Wallet
                  </button>
                )}
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="glass-card border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('search')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'search'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-fg'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
            <button
              onClick={() => setActiveTab('swap')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'swap'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-fg'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Swap</span>
            </button>
            <button
              onClick={() => setActiveTab('watchlist')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'watchlist'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-fg'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span>Watchlist</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'search' && (
          <div className="space-y-6">
            <TokenSearch onTokenSelect={setSelectedToken} />
            
            {selectedToken && (
              <>
                <TokenDetails tokenAddress={selectedToken} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <SafetyScore tokenAddress={selectedToken} />
                  <HolderAnalysis tokenAddress={selectedToken} />
                </div>
              </>
            )}

            {!selectedToken && (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Search for Tokens</h2>
                <p className="text-gray-400 max-w-md mx-auto">
                  Enter a token address, symbol, or name to get comprehensive safety analysis and on-chain insights
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'swap' && (
          <div className="max-w-2xl mx-auto">
            <SwapWidget />
          </div>
        )}

        {activeTab === 'watchlist' && (
          <WatchlistPanel />
        )}
      </main>

      {/* Feature Cards */}
      {activeTab === 'search' && !selectedToken && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="metric-card p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success to-green-400 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Token Safety</h3>
              <p className="text-sm text-gray-400">
                Instant safety scores, honeypot detection, and contract verification
              </p>
            </div>

            <div className="metric-card p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Social Insights</h3>
              <p className="text-sm text-gray-400">
                Top holders, transfer patterns, and Farcaster identity integration
              </p>
            </div>

            <div className="metric-card p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-warning to-yellow-400 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Gasless Swaps</h3>
              <p className="text-sm text-gray-400">
                Best prices across DEXs with sponsored gas fees
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
