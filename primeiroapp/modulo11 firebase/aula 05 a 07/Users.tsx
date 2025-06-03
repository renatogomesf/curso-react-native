import { View, Text, StyleSheet } from 'react-native';


export default function Users({user}: any) {
  return (
    <View style={styles.container}>
      <Text>Nome: {user.nome}</Text>
      <Text>Idade: {user.idade}</Text>
      <Text>Cargo: {user.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    marginBottom: 14
  },
});
