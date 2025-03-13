import { useState } from 'react';

import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Inputs() {
  const [nome, setNome] = useState('');

  function pegaNome(text: string) {
    if (text.length > 0) {
      setNome('Bem vindo ' + text);
    } else {
      setNome('');
    }
  }

  return (
    <View style={styles.conteiner}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(text) => pegaNome(text)}
      />
      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});
