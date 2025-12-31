import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert('Account created. Check your email.');
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-bold mb-2">Create account</Text>
      <Text className="text-gray-500 mb-6">
        Start accepting crypto payments
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
        onPress={handleRegister}
        className="bg-black py-4 rounded-lg"
      >
        <Text className="text-white text-center font-semibold">
          {loading ? 'Creating...' : 'Create Account'}
        </Text>
      </Pressable>
    </View>
  );
}
