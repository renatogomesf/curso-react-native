import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Product({ item, index, addProductOnList }: any) {
  return (
    <View key={index} style={styles.item}>
      <View style={styles.itemText}>
        <Text style={styles.itemName}>{item.name}</Text>

        <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.itemAdd}
        onPress={() => addProductOnList(item)}
      >
        <Text style={styles.itemAddText}>+</Text>
      </TouchableOpacity>
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
  itemAdd: {
    backgroundColor: '#5c9dff',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  itemAddText: {},
});
