import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation: any = useNavigation();

  function navegarSobre() {
    navigation.navigate('Detalhe');
  }

  return (
    <View style={styles.conteiner}>
      <Text>TELA HOME</Text>
      <Button title="Ir para detalhes" onPress={navegarSobre} />
      <Button title="abri drawer" onPress={()=> navigation.openDrawer()} />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
});
