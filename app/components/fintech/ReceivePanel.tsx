import { View, Text } from 'react-native';

interface ReceivePanelProps {
  address: string;
}

export function ReceivePanel({ address }: ReceivePanelProps) {
  return (
    <View className="border rounded-2xl p-6 items-center">
      <Text className="font-semibold mb-2">Receive Crypto</Text>

      <View className="bg-gray-100 rounded-xl p-4 mb-4">
        <Text className="text-xs text-gray-600">
          {address}
        </Text>
      </View>

      <Text className="text-xs text-gray-400 text-center">
        Funds received will auto-settle to local currency
      </Text>
    </View>
  );
}
