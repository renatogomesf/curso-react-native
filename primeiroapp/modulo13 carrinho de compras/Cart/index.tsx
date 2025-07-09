import { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../Context';

import { View, Text, StyleSheet, FlatList } from 'react-native';

import CartList from '../components/CartList';

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
      {productAdded == '' ? (
        <Text style={styles.noProduct}>Sem produtos no carrinho</Text>
      ) : (
        <View>
          <FlatList
            data={productAdded}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CartList
                item={item}
                index={index}
                decrement={decrement}
                increment={increment}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}

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
  noProduct: {
    textAlign: 'center',
    marginVertical: 20,
  },
});
