import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function Botoes() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  function entrar() {
    if (!input) {
      alert('digite algo');
      return;
    }

    setNome(input);
  }

  return (
    <View style={styles.conteiner}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(text) => setInput(text)}
      />

      <Button title="Entrar" onPress={entrar} />

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
    marginTop: 15,
  },
});
