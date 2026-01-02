import { View, Text, Pressable } from 'react-native';

interface Action {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
}

interface QuickActionsProps {
  actions: Action[];
}

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <View className="flex-row mt-6">
      {actions.map((action) => (
        <Pressable
          key={action.label}
          onPress={action.onPress}
          className={`flex-1 mx-1 py-4 rounded-xl ${
            action.variant === 'secondary'
              ? 'border'
              : 'bg-black'
          }`}
        >
          <Text
            className={`text-center font-semibold ${
              action.variant === 'secondary'
                ? 'text-black'
                : 'text-white'
            }`}
          >
            {action.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
