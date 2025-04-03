import { View, Text, StyleSheet, Button } from 'react-native';

import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

interface Route {
  [route: string]: {
    nome: string;
    email: string;
  };
}

export default function Sobre() {
  const route = useRoute<RouteProp<Route>>();
  const navigation: any = useNavigation();

  // useLayoutEffect é sincrono e executa antes do render. diferente do useEffect que é assíncrono e executa depois do render.
  // useLayoutEffect sou vai deixar prosseguir a renderização quando o que estiver dentro do LayoutEffect for executado.
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === '' ? 'Página Sobre' : route.params?.nome,
    });
  }, [navigation]);

  function navegarContato() {
    navigation.navigate('Contato');
  }

  return (
    <View style={styles.conteiner}>
      <Text>Página Sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button title="Ir para contato" onPress={navegarContato} />

      {/* valta uma tela */}
      <Button title="Voltar" onPress={() => navigation.goBack()} />
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
