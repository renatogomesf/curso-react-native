import { createDrawerNavigator } from './../../../../node_modules/@react-navigation/drawer/src/navigators/createDrawerNavigator';

import AntDesign from '@expo/vector-icons/AntDesign';

import StackRoutes from './StackRoutes';
import Sobre from '../pages/sobre';
import Contato from '../pages/contato';

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#00dae4',
        drawerInactiveTintColor: '#000',
        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        drawerItemStyle:{
          marginVertical: 5,
          borderRadius: 10,
          orderWidth: 2,
          borderColor: '#000',
          borderWidth: 1,
        }
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color }: any) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          drawerIcon: ({ color }: any) => (
            <AntDesign name="infocirlceo" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contato"
        component={Contato}
        options={{
          drawerIcon: ({ color }: any) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
