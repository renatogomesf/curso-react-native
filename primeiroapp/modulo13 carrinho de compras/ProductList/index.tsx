import { useContext } from 'react';
import { ProductContext } from '../Context';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Product from '../components/Product';

type RootStackParamList = {
  'Meu Carrinho': undefined;
  // outras rotas...
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function ProductList() {
  const navigation = useNavigation<NavigationProps>();

  const { products, productAdded, addProductOnList } =
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
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Product
              item={item}
              index={index}
              addProductOnList={addProductOnList}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
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
    left: -7,
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
    marginBottom: 20,
  },
});
