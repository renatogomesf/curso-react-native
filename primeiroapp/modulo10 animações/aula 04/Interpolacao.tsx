// para trabalhar com animações é preciso importar o Animated do RN

import { View, Text, StyleSheet, Animated } from 'react-native';

import { useRef, useEffect, useState } from 'react';

export default function Interpolacao() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  //   const opacidadeAnimada = useRef(new Animated.Value(0)).current;

  const [display, setDisplay] = useState<boolean>();

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start(({ finished }) => {
      // a função dentro do start só é chamada quando a animação finalizar
      // o finished retorna um true ou false. mas o uso dele é opcional
      setDisplay(finished);
    });
  }, []);

  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100], // entrada, vai de quanto até quento.
    outputRange: ['0%', '100%'], // vai sair de 0% até 100%
  });

  let porcentagemAltura = altAnimada.interpolate({
    inputRange: [50, 100], // entrada, vai de quanto até quento.
    outputRange: ['5%', '100%'], // vai sair de 0% até 100%
  });

  return (
    <View style={styles.conteiner}>
      <Animated.View
        style={{
          width: porcentagemLargura,
          height: porcentagemAltura,
          backgroundColor: '#86a1f1',
          justifyContent: 'center',
        }}
      >
        <Text style={{ display: `${display ? 'flex' : 'none'}` }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          reiciendis, officia, asperiores accusantium aliquid consectetur,
          quidem provident ipsa adipisci aperiam dolore nihil a nisi eveniet
          nostrum inventore voluptates porro praesentium.
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
