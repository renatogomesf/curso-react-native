import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductList from '../ProductList';
import Cart from '../Cart';

const Stack = createNativeStackNavigator();

export default function RouteAppCarrinho() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Meu Carrinho"
        component={Cart}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
