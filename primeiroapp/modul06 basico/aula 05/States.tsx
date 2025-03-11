import { useState } from 'react';

import { Text, View, Button } from 'react-native';

export default function States() {
  const [nome, setNome] = useState('');

  const [idade, setIdade] = useState(20);

  function entrar(nome: string, idade: number) {
    setNome(nome);
    setIdade(idade);
  }

  return (
    <View>
      <Text style={{ marginBottom: 20 }}>{nome}</Text>
      <Text style={{ marginBottom: 20 }}>{idade}</Text>
      <Button title="Mudar nome" onPress={() => entrar('lucas oliveira', 33)} />
    </View>
  );
}
