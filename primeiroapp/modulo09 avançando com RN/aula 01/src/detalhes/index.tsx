import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Detalhes({ data, voltar }: any) {
  return (
    <View style={styles.conteiner}>
      <View style={styles.modalConteiner}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => voltar(false)}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{data.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{data.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalConteiner: {
    width: '100%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  botaoVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  descricao: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
  },
});
