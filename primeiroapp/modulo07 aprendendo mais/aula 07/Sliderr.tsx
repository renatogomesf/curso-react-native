// Documentação: https://github.com/callstack/react-native-slider

// Comando para instalar: npm install @react-native-community/slider

import { View, Text, StyleSheet } from 'react-native';

import Slider from '@react-native-community/slider';
import { useState } from 'react';

export default function Sliderr() {
  const [valor, setValor] = useState(5);

  return (
    <View style={styles.conteiner}>
      <Slider
        minimumValue={0}
        maximumValue={10}
        value={valor}
        onValueChange={(valorAtual) => setValor(valorAtual)}
        step={1}
        minimumTrackTintColor='green'
        maximumTrackTintColor='red'
        // inverted
        thumbTintColor='blue'
        // thumbImage={require('../../src/biscoito.png')}
        renderStepNumber
      />

      <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 50 }}>
        {valor}
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
