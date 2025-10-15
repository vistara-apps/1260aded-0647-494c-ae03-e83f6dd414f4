# TokenScope: Intelligent Token Insights & Swaps

A comprehensive Base Mini App for token safety analysis, on-chain insights, and gasless trading within Farcaster.

## Features

- 🛡️ **Token Safety Analysis**: Instant safety scores, honeypot detection, and contract verification
- 👥 **Social On-Chain Insights**: Top holders, transfer patterns, and Farcaster identity integration
- ⚡ **Gasless Swaps**: Best prices across DEXs with sponsored gas fees
- 📊 **Watchlist & Alerts**: Track tokens and receive notifications for price movements
- 🔗 **Farcaster Integration**: Share insights and collaborate on trades

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Chain ID: 8453)
- **Wallet Integration**: OnchainKit, Wagmi, Viem
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**:
   Copy `.env.example` to `.env.local` and fill in your API keys:
   - OnchainKit API Key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)
   - DEX Aggregator API keys (0x, 1inch)
   - Token Safety API keys (GoPlus)
   - Blockchain Indexer API keys (Covalent)

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
tokenscope-base-miniapp/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main application page
│   ├── providers.tsx       # OnchainKit provider setup
│   └── globals.css         # Global styles with Coinbase theme
├── components/
│   ├── TokenSearch.tsx     # Token search interface
│   ├── TokenDetails.tsx    # Token information display
│   ├── SafetyScore.tsx     # Safety analysis component
│   ├── HolderAnalysis.tsx  # Top holders visualization
│   ├── SwapWidget.tsx      # Gasless swap interface
│   └── WatchlistPanel.tsx  # Watchlist management
├── public/
│   └── farcaster.json      # Farcaster Mini App manifest
└── package.json
```

## Key Features Implementation

### Token Safety Analysis
- Real-time safety scores using GoPlus API
- Honeypot detection and contract verification
- Audit report integration

### Gasless Swaps
- DEX aggregation via 0x and 1inch APIs
- Gas sponsorship through Paymaster
- Slippage protection and best price routing

### Social Integration
- Farcaster identity display for token holders
- Share trade configurations as Frames
- Collaborative watchlists and alerts

## API Integration

The app integrates with:
- **OnchainKit**: Wallet connection, identity, transactions
- **MiniKit**: Farcaster social features
- **Base RPC**: Blockchain data and transactions
- **0x/1inch**: DEX aggregation for best swap prices
- **GoPlus**: Token safety and security analysis
- **Covalent**: Historical blockchain data and analytics

## Deployment

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   ```bash
   vercel deploy
   ```

3. **Configure Environment Variables** in your deployment platform

## Contributing

Contributions are welcome! Please follow these guidelines:
- Use TypeScript for all new code
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- GitHub Issues: [Create an issue](https://github.com/yourusername/tokenscope/issues)
- Documentation: [OnchainKit Docs](https://onchainkit.xyz)
- Base Docs: [Base Documentation](https://docs.base.org)
