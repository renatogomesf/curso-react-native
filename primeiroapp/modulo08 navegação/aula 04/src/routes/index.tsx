import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from '@expo/vector-icons/AntDesign';

import StackRoutes from './StackRoutes';
import Sobre from '../pages/sobre';
import Contato from '../pages/contato';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // esconde o cabeçalho
        tabBarHideOnKeyboard: true, // esconde a barra de navegação quando o teclado está aberto
        tabBarShowLabel: true, // esconde o nome do botão na barra de navegação
        tabBarActiveTintColor: 'red', // cor do ícone quando ativo,
        tabBarStyle: {
          backgroundColor: '#202225',
          borderTopWidth: 0, // tira a borda de cima da barra de navegação
          height: 100, // altura da barra de navegação
        },
        tabBarIconStyle:{
            borderColor: '#fff',
            borderWidth: 1,
            width: 50,
            height: 50,
        },
        tabBarLabelStyle:{
            fontSize: 15,
            marginTop: 5,
            color: '#fff',
        }
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={size} color={color} />;
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

      <Tab.Screen name="config" component={Contato} />
      {/* <Tab.Screen name="teste" component={Contato} /> */}
    </Tab.Navigator>
  );
}
