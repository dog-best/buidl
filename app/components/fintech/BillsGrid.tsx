import { View, Text, Pressable } from 'react-native';

interface Bill {
  label: string;
  description?: string;
}

interface BillsGridProps {
  bills: Bill[];
}

export function BillsGrid({ bills }: BillsGridProps) {
  return (
    <View className="flex-row flex-wrap justify-between">
      {bills.map((bill) => (
        <Pressable
          key={bill.label}
          className="w-[48%] border rounded-xl p-4 mb-4"
        >
          <Text className="font-medium">{bill.label}</Text>
          <Text className="text-xs text-gray-500 mt-1">
            {bill.description ?? 'Pay using crypto → NGN'}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
