import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function UseEffect() {
  const [contador, setContador] = useState(0);
  const [renderizar, setRenderizar] = useState(true);

  useEffect(() => {
    // quando o componente é montado
    setTimeout(() => {
      setContador(350);
    }, 2000);
  }, []);

  useEffect(() => {
    // quando uma variável que está sendo observada muda
    console.log('contou');
  }, [contador]);

  return (
    <View style={styles.conteiner}>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
      <Text style={{ fontSize: 30, margin: 30 }}>{contador}</Text>
      <Button title="Diminuir" onPress={() => setContador(contador - 1)} />

      {renderizar && <Nome />}

      <Button
        title="Adicionar/Remover"
        onPress={() => setRenderizar(!renderizar)}
      />
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

function Nome() {
  useEffect(() => {
    console.log('nome montado');

    return () => console.log('componente desmontado'); // o return só é chamado quando o componente for desmontado
  }, []);

  return <Text style={{ fontSize: 30, margin: 30 }}>Mateus Sujeito</Text>;
}
