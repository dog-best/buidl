import { View, Text, Pressable } from 'react-native';
import { MOCK_BALANCE } from '@/constants/mock';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Text className="text-gray-500">Total Balance</Text>
      <Text className="text-4xl font-bold mt-2">
        ₦{MOCK_BALANCE.amount.toLocaleString()}
      </Text>

      <View className="flex-row mt-10 space-x-4">
        <Pressable
          onPress={() => router.push('/(tabs)/receive')}
          className="flex-1 bg-black py-4 rounded-xl"
        >
          <Text className="text-white text-center font-semibold">
            Receive
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/(tabs)/pay')}
          className="flex-1 border py-4 rounded-xl"
        >
          <Text className="text-center font-semibold">
            Send
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
