import { View, Text, Pressable } from "react-native";

const UTILITY_ITEMS = [
  { label: "Electricity", tag: "Pay Bills" },
  { label: "Airtime", tag: "Recharge" },
  { label: "Data", tag: "Buy Data" },
  { label: "Cable TV", tag: "Cable Subscription" },
  { label: "Internet", tag: "ISP" },
  { label: "Water Bill", tag: "Water Services" },
];

export function UtilityBills() {
  return (
    <View className="bg-white border rounded-xl p-5 mb-6">
      <Text className="font-semibold text-lg mb-4">Bills & Utilities</Text>
      <View className="flex-row flex-wrap justify-between">
        {UTILITY_ITEMS.map((item) => (
          <Pressable
            key={item.label}
            className="w-[48%] border rounded-xl p-4 mb-4"
          >
            <Text className="font-medium">{item.label}</Text>
            <Text className="text-xs text-gray-500 mt-1">
              {item.tag}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
