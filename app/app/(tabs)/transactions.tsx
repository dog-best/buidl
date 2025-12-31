import { View, Text } from 'react-native';
import { MOCK_TRANSACTIONS } from '@/constants/mock';

export default function Transactions() {
  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Text className="text-2xl font-bold mb-6">
        Transactions
      </Text>

      {MOCK_TRANSACTIONS.map((tx) => (
        <View
          key={tx.id}
          className="border rounded-xl p-4 mb-4"
        >
          <Text className="font-semibold">
            {tx.type.toUpperCase()} • {tx.asset}
          </Text>
          <Text className="text-gray-500">
            ₦{tx.fiat.toLocaleString()}
          </Text>
          <Text className="text-xs mt-1">
            {tx.status}
          </Text>
        </View>
      ))}
    </View>
  );
}
