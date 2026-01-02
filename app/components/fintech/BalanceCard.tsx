import { View, Text } from 'react-native';

interface BalanceCardProps {
  amount: number;
  currency?: string;
}

export function BalanceCard({
  amount,
  currency = '₦',
}: BalanceCardProps) {
  return (
    <View className="bg-black rounded-2xl p-6">
      <Text className="text-gray-400 text-sm">Total Balance</Text>
      <Text className="text-white text-3xl font-bold mt-2">
        {currency}
        {amount.toLocaleString()}
      </Text>
      <Text className="text-gray-500 text-xs mt-1">
        Crypto settled in local currency
      </Text>
    </View>
  );
}
