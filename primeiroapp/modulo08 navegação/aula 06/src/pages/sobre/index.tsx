import { View, Text, StyleSheet, Button } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.conteiner}>
      <Text>Página Sobre</Text>
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
