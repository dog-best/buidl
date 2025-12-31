import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Link } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      alert(error.message);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-bold mb-2">Welcome back</Text>
      <Text className="text-gray-500 mb-6">
        Login to BestCity Pay
      </Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        className="border rounded-lg px-4 py-3 mb-4"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        className="border rounded-lg px-4 py-3 mb-6"
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        onPress={handleLogin}
        className="bg-black py-4 rounded-lg"
      >
        <Text className="text-white text-center font-semibold">
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </Pressable>

      <Link href="/(auth)/register" className="mt-6 text-center text-gray-600">
        Don’t have an account? Create one
      </Link>
    </View>
  );
}
