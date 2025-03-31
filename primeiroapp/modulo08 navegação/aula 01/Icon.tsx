import { View, Text, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function Icon() {
 return (
    <View style={styles.conteiner}>
        <Ionicons name='qr-code' size={50} color="black"/>
        <FontAwesome5 name="trash-alt" size={50} color="black" />
        <AntDesign name="user" size={50} color="black" />
        <Entypo name="menu" size={50} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});