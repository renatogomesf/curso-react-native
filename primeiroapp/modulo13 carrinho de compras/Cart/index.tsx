import { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../Context';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cart() {
  const { productAdded, setProductAdded } = useContext(ProductContext);

  const [total, setTotal] = useState(0);

  function soma() {
    let soma = 0;
    productAdded.map((item: any) => {
      soma += item.price * item.amount;
    });
    setTotal(soma);
  }

  useEffect(() => {
    soma();
  }, [productAdded]);

  function decrement(index: any) {
    productAdded[index].amount--;

    if (productAdded[index].amount == 0) {
      const result = productAdded.filter((element: any) => element.amount != 0);
      setProductAdded(result);
    }
    soma();
  }

  function increment(index: any) {
    productAdded[index].amount++;

    const result = productAdded.filter((element: any) => element.amount > 0);
    setProductAdded(result);

    soma();
  }

  return (
    <View style={styles.container}>
      {productAdded.map((item: any, index: any) => {
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
      })}

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
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
