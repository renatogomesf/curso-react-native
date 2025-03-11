import { useState } from 'react';

import { Text, View, Button, StyleSheet } from 'react-native';

export default function States() {
  const [nome, setNome] = useState('');

  const [idade, setIdade] = useState(20);

  function entrar(nome: string, idade: number) {
    setNome(nome);
    setIdade(idade);
  }

  return (
    <View style={styles.area}>
      <Text style={[styles.titulo, styles.textoPreto]}>{nome}</Text>
      <Text style={styles.titulo}>{idade}</Text>
      <Text style={styles.subTitulo}>Texto qualquer</Text>
      <Button title="Mudar nome" onPress={() => entrar('lucas oliveira', 33)} />
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    padding: 10,
    borderWidth: 3,
    borderColor: 'green',
  },
  titulo: {
    fontSize: 20,
    color: '#ff0000',
  },
  subTitulo: {
    color: '#00ff00',
    fontSize: 17,
  },
  textoPreto: {
    color: '#000',
  },
});
