import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { SUPPORTED_NETWORKS } from '@/constants/mock';

export default function Pay() {
  const [asset, setAsset] = useState<any>(null);
  const [amount, setAmount] = useState('');

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Text className="text-2xl font-bold mb-6">
        Send Payment
      </Text>

      {SUPPORTED_NETWORKS.map((a) => (
        <Pressable
          key={a.id}
          onPress={() => setAsset(a)}
          className="border rounded-lg p-3 mb-3"
        >
          <Text>{a.symbol}</Text>
        </Pressable>
      ))}

      {asset && (
        <>
          <TextInput
            placeholder="Amount"
            keyboardType="numeric"
            className="border rounded-lg px-4 py-3 mt-6"
            value={amount}
            onChangeText={setAmount}
          />

          <Pressable className="bg-black py-4 rounded-xl mt-6">
            <Text className="text-white text-center font-semibold">
              Continue
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
