import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation: any = useNavigation();

  function navegarSobre() {
    navigation.navigate('Sobre', {
      nome: 'Lucas',
      email: 'teste@hotmail.com'
    });
  }

  return (
    <View style={styles.conteiner}>
      <Text>TELA HOME</Text>
      <Button title="Ir para sobre" onPress={navegarSobre} />
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
