import { createDrawerNavigator } from './../../../../node_modules/@react-navigation/drawer/src/navigators/createDrawerNavigator';

import AntDesign from '@expo/vector-icons/AntDesign';

import StackRoutes from './StackRoutes';
import Sobre from '../pages/sobre';
import Contato from '../pages/contato';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#003CB3',
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
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
