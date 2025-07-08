import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cart() {
  return (
    <View style={styles.container}>
      <View key={''} style={styles.item}>
        <View style={styles.itemText}>
          <Text style={styles.itemName}>coca cola</Text>

          <Text style={styles.itemPrice}>R$ 19.90</Text>
        </View>

        <View style={styles.amount}>
          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountButtonText}>-</Text>
          </TouchableOpacity>
          <Text>1</Text>
          <TouchableOpacity style={styles.amountButton}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.total}>Total: R$ 6.50</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
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
