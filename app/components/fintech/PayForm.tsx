import { View, Text, TextInput } from 'react-native';

export function PayForm() {
  return (
    <View className="border rounded-2xl p-5">
      <Text className="font-semibold mb-4">Send Payment</Text>

      <Text className="text-xs text-gray-500 mb-1">Recipient</Text>
      <TextInput
        placeholder="Wallet address or username"
        className="border rounded-xl px-4 py-3 mb-4"
      />

      <Text className="text-xs text-gray-500 mb-1">Amount</Text>
      <TextInput
        placeholder="0.00"
        keyboardType="numeric"
        className="border rounded-xl px-4 py-3 mb-4"
      />

      <Text className="text-xs text-gray-400">
        Amount will be settled in NGN
      </Text>
    </View>
  );
}
