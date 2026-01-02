import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const USER = {
  name: "Nathaniel",
  avatar: "https://i.pravatar.cc/100",
};

const BALANCE = 245000.75;

export default function Home() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* ================= HEADER ================= */}
      <View className="flex-row items-center justify-between px-6 pt-16">
        <View className="flex-row items-center space-x-3">
          <Image
            source={{ uri: USER.avatar }}
            className="w-10 h-10 rounded-full"
          />
          <View>
            <Text className="text-xs text-gray-500">Welcome</Text>
            <Text className="font-semibold text-black">
              {USER.name}
            </Text>
          </View>
        </View>

        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* ================= BALANCE CARD ================= */}
      <View className="px-6 mt-8">
        <View className="bg-purple-600 rounded-3xl p-6">
          <Text className="text-white/70 text-sm">Total Balance</Text>

          <View className="flex-row items-center mt-2">
            <Text className="text-white text-3xl font-bold mr-3">
              {showBalance
                ? `₦${BALANCE.toLocaleString()}`
                : "••••••"}
            </Text>

            <Pressable onPress={() => setShowBalance(!showBalance)}>
              <Ionicons
                name={showBalance ? "eye-outline" : "eye-off-outline"}
                size={22}
                color="white"
              />
            </Pressable>
          </View>

          {/* Balance Actions */}
          <View className="flex-row mt-6 space-x-4">
            <ActionButton
              label="Add Money"
              icon="add"
              onPress={() => router.push("/(tabs)/receive")}
            />
            <ActionButton
              label="Send"
              icon="arrow-up"
              onPress={() => router.push("/(tabs)/pay")}
            />
          </View>
        </View>
      </View>

      {/* ================= QUICK SERVICES ================= */}
      <View className="px-6 mt-10">
        <Text className="font-semibold text-lg mb-4">
          Quick Services
        </Text>

        <View className="flex-row flex-wrap justify-between">
          <ServiceItem label="Airtime" icon="call-outline" />
          <ServiceItem label="Data" icon="wifi-outline" />
          <ServiceItem label="Electricity" icon="flash-outline" />
          <ServiceItem label="TV" icon="tv-outline" />
          <ServiceItem label="Crypto" icon="logo-bitcoin" />
          <ServiceItem label="More" icon="grid-outline" />
        </View>
      </View>

      {/* ================= RECENT TRANSACTIONS ================= */}
      <View className="px-6 mt-10">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="font-semibold text-lg">
            Recent Transactions
          </Text>
          <Pressable onPress={() => router.push("/(tabs)/transactions")}>
            <Text className="text-purple-600 font-medium">
              View all
            </Text>
          </Pressable>
        </View>

        <TransactionItem
          title="Wallet Funding"
          amount="+ ₦50,000"
          positive
        />
        <TransactionItem
          title="Transfer to John"
          amount="- ₦12,500"
        />
        <TransactionItem
          title="Airtime Purchase"
          amount="- ₦2,000"
        />
      </View>
    </ScrollView>
  );
}

/* ================= COMPONENTS ================= */

function ActionButton({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: any;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 bg-white/20 py-3 rounded-xl flex-row items-center justify-center space-x-2"
    >
      <Ionicons name={icon} size={18} color="white" />
      <Text className="text-white font-semibold">
        {label}
      </Text>
    </Pressable>
  );
}

function ServiceItem({
  label,
  icon,
}: {
  label: string;
  icon: any;
}) {
  return (
    <Pressable className="w-[30%] items-center mb-6">
      <View className="w-14 h-14 bg-purple-100 rounded-2xl items-center justify-center mb-2">
        <Ionicons name={icon} size={22} color="#7c3aed" />
      </View>
      <Text className="text-xs text-black font-medium">
        {label}
      </Text>
    </Pressable>
  );
}

function TransactionItem({
  title,
  amount,
  positive,
}: {
  title: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <View className="flex-row justify-between items-center py-4 border-b border-gray-100">
      <Text className="font-medium text-black">
        {title}
      </Text>
      <Text
        className={`font-semibold ${
          positive ? "text-green-600" : "text-black"
        }`}
      >
        {amount}
      </Text>
    </View>
  );
}
