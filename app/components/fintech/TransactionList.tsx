import { View, Text } from 'react-native';

interface Transaction {
  id: string;
  title: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({
  transactions,
}: TransactionListProps) {
  return (
    <View>
      {transactions.map((tx) => (
        <View
          key={tx.id}
          className="flex-row justify-between items-center border-b py-4"
        >
          <View>
            <Text className="font-medium">{tx.title}</Text>
            <Text className="text-xs text-gray-400">
              {tx.status}
            </Text>
          </View>

          <Text className="font-semibold">{tx.amount}</Text>
        </View>
      ))}
    </View>
  );
}
