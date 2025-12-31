export const MOCK_BALANCE = {
  currency: 'NGN',
  amount: 125000.45,
};

export const SUPPORTED_NETWORKS = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    networks: ['Bitcoin'],
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    networks: ['Ethereum', 'Base'],
  },
  {
    id: 'bnb',
    name: 'BNB',
    symbol: 'BNB',
    networks: ['BNB Smart Chain'],
  },
  {
    id: 'usdc',
    name: 'USDC',
    symbol: 'USDC',
    networks: ['Ethereum', 'Base', 'BNB'],
  },
];

export const MOCK_TRANSACTIONS = [
  {
    id: '1',
    type: 'deposit',
    asset: 'USDC',
    amount: 250,
    fiat: 375000,
    status: 'completed',
  },
  {
    id: '2',
    type: 'payment',
    asset: 'ETH',
    amount: 0.15,
    fiat: 180000,
    status: 'pending',
  },
];
