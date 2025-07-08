import { useContext } from 'react';
import { ProductContext } from '../Context';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  'Meu Carrinho': undefined;
  // outras rotas...
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function ProductList() {
  const navigation = useNavigation<NavigationProps>();

  const { products, addProductOnList, productAdded } =
    useContext(ProductContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de produtos</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Meu Carrinho')}
        >
          <Feather name="shopping-cart" size={30} color="black" />
          <View style={styles.cartAmount}>
            <Text style={styles.cartAmountText}>{productAdded.length}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.productList}>
        {products.map((item: any, index: number) => {
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
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  cartButton: { position: 'relative' },
  cartAmount: {
    position: 'absolute',
    top: 15,
    left: -10,
    backgroundColor: '#5c9dff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  cartAmountText: {
    color: '#fff',
  },
  productList: {
    marginTop: 20,
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
