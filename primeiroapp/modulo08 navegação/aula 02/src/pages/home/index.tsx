import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.conteiner}>
      <Text>TELA HOME</Text>
      <Button
        title="Ir para sobre"
        onPress={() => navigation.navigate('Sobre')}
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
