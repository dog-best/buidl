import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { SUPPORTED_NETWORKS } from '@/constants/mock';

export default function Receive() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Text className="text-2xl font-bold mb-6">
        Select asset to deposit
      </Text>

      {SUPPORTED_NETWORKS.map((asset) => (
        <Pressable
          key={asset.id}
          onPress={() => setSelected(asset)}
          className={`border rounded-xl p-4 mb-4 ${
            selected?.id === asset.id
              ? 'border-black'
              : 'border-gray-200'
          }`}
        >
          <Text className="font-semibold">
            {asset.name} ({asset.symbol})
          </Text>
          <Text className="text-gray-500">
            {asset.networks.join(', ')}
          </Text>
        </Pressable>
      ))}

      {selected && (
        <View className="mt-8 p-4 bg-gray-100 rounded-xl">
          <Text className="font-semibold">
            Selected: {selected.name}
          </Text>
          <Text className="text-gray-500 mt-1">
            Network selection coming next
          </Text>
        </View>
      )}
    </View>
  );
}
