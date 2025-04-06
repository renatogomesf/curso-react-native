import { View, Text, Image } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer/src/views/DrawerContentScrollView';
import { DrawerItemList } from '@react-navigation/drawer/src/views/DrawerItemList';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: '100%',
          height: 85,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <Image
          source={require('../assets/perfil.png')}
          style={{ width: 65, height: 65 }}
        />
        <Text style={{ color: '#000', fontSize: 17, marginTop: 5 }}>
          Bem-vindo!
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
