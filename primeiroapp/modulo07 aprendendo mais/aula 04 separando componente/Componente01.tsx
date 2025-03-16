import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Componente02 from './Componente02';

export default function Componente01() {
  const [feed, setFeed] = useState([
    { id: '1', nome: 'mateus', idade: 50, email: 'mateus@mateus.com' },
    { id: '2', nome: 'lucas', idade: 23, email: 'lucas@lucas.com' },
    { id: '3', nome: 'henrique', idade: 40, email: 'henrique@henrique.com' },
    { id: '4', nome: 'renato', idade: 27, email: 'renato@renato.com' },
    { id: '5', nome: 'karen', idade: 29, email: 'karen@karen.com' },
    { id: '6', nome: 'kellen', idade: 22, email: 'kellen@kellen.com' },
    { id: '7', nome: 'caio', idade: 31, email: 'caio@caio.com' },
    { id: '8', nome: 'boris', idade: 10, email: 'boris@boris.com' },
    { id: '9', nome: 'catita', idade: 10, email: 'catita@catita.com' },
    { id: '10', nome: 'caputino', idade: 10, email: 'caputino@caputino.com' },
  ]);

  return (
    <View style={styles.conteiner}>
      <FlatList // flatlist preserva a memória e só carrega o que está em tela. o resto da lista não é renderizada.
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id} // caso o flatlist não ache o id na lista, usa isso pra dizer pra ele qual é.
        data={feed} // dados/itens da lista. quem vem de algum canto.
        renderItem={(
          { item } // percorre a data (faz um map), item por item, e renderizando na tela.
        ) => <Componente02 data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});
