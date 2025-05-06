import { ReactElement, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

// quando um componente nativo não pode ser animado da forma padrão com o Animatable."component", então se cria um componente animado. mas não são todos que aceitam ser criados dessa forma
const ButtonAnimatad = Animatable.createAnimatableComponent(TouchableOpacity);

export default function Animatables() {
  const buttonRef = useRef<any>(null);

  function handleClick() {
    buttonRef.current?.shake();
  }

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="jello"
        iterationCount={Infinity}
        duration={2000}
      >
        opa
      </Animatable.Text>

      <ButtonAnimatad
        style={styles.button}
        animation="fadeInDown"
        ref={buttonRef}
        onPress={handleClick}
      >
        <Text style={{ color: '#fff' }}>Animar</Text>
      </ButtonAnimatad>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    backgroundColor: 'gray',
  },
  button: {
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
