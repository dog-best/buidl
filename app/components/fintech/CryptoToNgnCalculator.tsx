import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";

// supported coins + their api ids
const SUPPORTED_COINS = [
  { label: "Bitcoin (BTC)", id: "bitcoin" },
  { label: "Ethereum (ETH)", id: "ethereum" },
  { label: "USDC", id: "usd-coin" },
  { label: "USDT", id: "tether" },
  { label: "Solana (SOL)", id: "solana" },
];

export function CryptoToNgnCalculator() {
  const [selectedCoin, setSelectedCoin] = useState(SUPPORTED_COINS[0].id);
  const [amount, setAmount] = useState("1");
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRate() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoin}&vs_currencies=ngn`
        );
        const json = await res.json();
        setRate(json[selectedCoin]?.ngn ?? null);
      } catch (e) {
        console.error("Price fetch failed:", e);
      } finally {
        setLoading(false);
      }
    }

    fetchRate();
  }, [selectedCoin]);

  const ngnValue =
    rate !== null ? (parseFloat(amount || "0") * rate).toLocaleString() : "";

  return (
    <View className="bg-white border rounded-xl p-5 mb-6">
      {/* Coin Selector */}
      <Text className="font-semibold mb-2">Convert Crypto → NGN</Text>
      <View className="flex-row space-x-2 mb-3">
        {SUPPORTED_COINS.map((coin) => (
          <Pressable
            key={coin.id}
            onPress={() => setSelectedCoin(coin.id)}
            className={`px-3 py-2 rounded-full border ${
              selectedCoin === coin.id
                ? "bg-black"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <Text
              className={`text-sm ${
                selectedCoin === coin.id ? "text-white" : "text-black"
              }`}
            >
              {coin.label.split("(")[1].replace(")", "")}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Amount Input */}
      <TextInput
        placeholder="Enter crypto amount"
        keyboardType="numeric"
        className="border rounded-xl px-4 py-3 mb-2"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Conversion Result */}
      {loading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <Text className="text-lg font-bold">
          ≈ {ngnValue ? `₦${ngnValue}` : "--"} NGN
        </Text>
      )}
      <Text className="text-xs text-gray-500 mt-1">
        1 {selectedCoin.toUpperCase()} ≈ {rate ? `₦${rate.toLocaleString()}` : "--"} NGN
      </Text>
    </View>
  );
}
