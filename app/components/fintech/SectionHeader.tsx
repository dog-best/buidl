import { View, Text, Pressable } from 'react-native';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onPress?: () => void;
}

export function SectionHeader({
  title,
  actionLabel,
  onPress,
}: SectionHeaderProps) {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-lg font-semibold">{title}</Text>
      {actionLabel && (
        <Pressable onPress={onPress}>
          <Text className="text-sm text-gray-500">
            {actionLabel}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
