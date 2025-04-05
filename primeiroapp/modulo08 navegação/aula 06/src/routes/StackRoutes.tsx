import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import Detalhes from '../pages/detalhes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detalhe" component={Detalhes} />
    </Stack.Navigator>
  );
}
