import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from './src/pages/home';
import Sobre from './src/pages/sobre';
import Contato from './src/pages/contato';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
            headerShown: false, // esconde o cabeçalho
            tabBarHideOnKeyboard: true, // esconde a barra de navegação quando o teclado está aberto
            tabBarShowLabel: true, // esconde o nome do botão na barra de navegação
            tabBarActiveTintColor: 'red', // cor do ícone quando ativo,
            tabBarStyle: {
                backgroundColor: '#202225',
                borderTopWidth: 0, // tira a borda de cima da barra de navegação
            }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // tabBarLabel: 'Início',
            // headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Entypo name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            // headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="profile" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            // headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="contacts" size={size} color={color} />;
            },
          }}
        />

        <Tab.Screen name='config' component={Contato}/>
        <Tab.Screen name='teste' component={Contato}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
