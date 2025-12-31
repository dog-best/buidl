import { View, Text } from 'react-native';
import { SUPPORTED_NETWORKS } from '@/constants/mock';

export default function Wallet() {
  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Text className="text-2xl font-bold mb-6">Wallet</Text>

      {SUPPORTED_NETWORKS.map((asset) => (
        <View
          key={asset.id}
          className="border rounded-xl p-4 mb-4"
        >
          <Text className="font-semibold">
            {asset.name} ({asset.symbol})
          </Text>
          <Text className="text-gray-500 mt-1">
            Networks: {asset.networks.join(', ')}
          </Text>
        </View>
      ))}
    </View>
  );
}
