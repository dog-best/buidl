import { View, Text, Button } from "react-native";
import { WebView, WebViewNavigation } from "react-native-webview";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WalletScreen() {
  const [showPaystack, setShowPaystack] = useState(false);
  const reference = `REF_${Date.now()}`;

  const verifyPayment = async () => {
    await supabase.functions.invoke("paystack-verify", {
      body: {
        reference,
        amount: 5000,
      },
    });

    setShowPaystack(false);
  };

  if (showPaystack) {
    return (
      <WebView
        source={{
          uri: `https://paystack.com/pay/YOUR_PAYSTACK_PUBLIC_LINK?reference=${reference}`,
        }}
        onNavigationStateChange={(state: WebViewNavigation) => {
          if (state.url.includes("success")) {
            verifyPayment();
          }
        }}
      />
    );
  }

  return (
    <View>
      <Text>Wallet</Text>
      <Button
        title="Fund Wallet ₦5,000"
        onPress={() => setShowPaystack(true)}
      />
    </View>
  );
}
