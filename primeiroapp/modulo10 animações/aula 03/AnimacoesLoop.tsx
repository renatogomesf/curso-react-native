// para trabalhar com animações é preciso importar o Animated do RN

import { View, Text, StyleSheet, Animated } from 'react-native';

import { useRef, useEffect } from 'react';

export default function AnimacoesLoop() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
//   const opacidadeAnimada = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    
    // aceita apenas uma animação.
    Animated.loop(
        Animated.sequence([
            Animated.timing(larAnimada, {
                toValue: 300,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.timing(larAnimada, {
                toValue: 150,
                duration: 1000,
                useNativeDriver: false
            })
        ])
    ).start()
    
  }, []);

  return (
    <View style={styles.conteiner}>
      <Animated.View
        style={{
          width: larAnimada,
          height: altAnimada,
          backgroundColor: '#4169e1',
          justifyContent: 'center',
          borderRadius: 25
        //   opacity: opacidadeAnimada,
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