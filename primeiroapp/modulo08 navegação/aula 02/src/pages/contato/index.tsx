import { View, Text, StyleSheet, Button } from 'react-native';

import {StackActions, useNavigation } from '@react-navigation/native';




export default function Contato() {

  const navigation = useNavigation();

  function voltarHome() {
    navigation.dispatch(StackActions.popToTop()) // valta tudo para tela inicial
  }

  return (
    <View style={styles.conteiner}>
      <Text>Página Contato</Text>

      {/* valta uma tela */}
      <Button title="Voltar Home" onPress={voltarHome} />
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
