import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartList({ item, index, decrement, increment }: any) {
  return (
    <View key={index} style={styles.item}>
      <View style={styles.itemText}>
        <Text style={styles.itemName}>{item.name}</Text>

        <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>

      <View style={styles.amount}>
        <TouchableOpacity
          onPress={() => decrement(index)}
          style={styles.amountButton}
        >
          <Text style={styles.amountButtonText}>-</Text>
        </TouchableOpacity>
        <Text>{item.amount}</Text>
        <TouchableOpacity
          onPress={() => increment(index)}
          style={styles.amountButton}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    height: 80,
    marginBottom: 15,
  },
  itemText: {},
  itemName: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  itemPrice: {},
  amountButton: {
    backgroundColor: '#5c9dff',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  amountButtonText: {
    fontSize: 25,
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
});
