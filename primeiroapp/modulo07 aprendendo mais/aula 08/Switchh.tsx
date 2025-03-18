import { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function Switchh() {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <View style={styles.conteiner}>
      <Switch
        value={status}
        onValueChange={(valorAtual) => setStatus(valorAtual)}
        trackColor={{false: '#ff0000', true: '#00ff00'}}
        thumbColor={status? '#00ff00' : '#ff0000'}
      />

      <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 50 }}>
        {status ? 'ATIVADO' : 'DESATIVADO'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    marginTop: 40,
  },
});
