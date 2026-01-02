import { View, Text } from 'react-native';

interface Wallet {
  symbol: string;
  balance: string;
  network?: string;
}

interface WalletListProps {
  wallets: Wallet[];
}

export function WalletList({ wallets }: WalletListProps) {
  return (
    <View>
      {wallets.map((wallet) => (
        <View
          key={wallet.symbol}
          className="flex-row justify-between items-center border rounded-xl p-4 mb-3"
        >
          <View>
            <Text className="font-semibold">{wallet.symbol}</Text>
            {wallet.network && (
              <Text className="text-xs text-gray-400">
                {wallet.network}
              </Text>
            )}
          </View>

          <Text className="text-gray-700 font-medium">
            {wallet.balance}
          </Text>
        </View>
      ))}
    </View>
  );
}
