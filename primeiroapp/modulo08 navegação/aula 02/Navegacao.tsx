// Only import react-native-gesture-handler on native platforms

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home';
import Sobre from './src/pages/sobre';
import Contato from './src/pages/contato';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela inicio',
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: '#fff',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: 'Página sobre',
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{
            title: 'Página contato',
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
