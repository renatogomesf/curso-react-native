// para trabalhar com animações é preciso importar o Animated do RN

import { View, Text, StyleSheet, Animated } from 'react-native';

import { useRef, useEffect } from 'react';

export default function AnimacoesSequenciaParalelo() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const opacidadeAnimada = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animated.sequence([
    //   Animated.timing(larAnimada, {
    //     toValue: 300,
    //     duration: 500,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(altAnimada, {
    //     toValue: 300,
    //     duration: 500,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(opacidadeAnimada, {
    //     toValue: 0,
    //     duration: 500,
    //     useNativeDriver: false,
    //   }),
    // ]).start();

    // Animated.parallel([
    //   Animated.timing(larAnimada, {
    //     toValue: 300,
    //     duration: 500,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(altAnimada, {
    //     toValue: 300,
    //     duration: 500,
    //     useNativeDriver: false,
    //   }),
    // ]).start();

    Animated.sequence([
      Animated.timing(opacidadeAnimada, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={styles.conteiner}>
      <Animated.View
        style={{
          width: larAnimada,
          height: altAnimada,
          backgroundColor: '#4169e1',
          justifyContent: 'center',
          opacity: opacidadeAnimada,
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 22, color: '#fff' }}>
          Carregando...
        </Text>
      </Animated.View>
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
