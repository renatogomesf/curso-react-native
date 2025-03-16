import { View, Text, StyleSheet } from 'react-native';

export default function Componente02({data}:any) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>{data.nome}</Text>
      <Text style={styles.textoPessoa}>{data.idade}</Text>
      <Text style={styles.textoPessoa}>{data.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#747272',
    height: 200,
    margin: 15,
    padding: 15,
    justifyContent: 'center',
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 20,
  },
});