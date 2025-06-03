import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { db } from '../../firebase/firebaseConnection';
import { deleteDoc, doc } from 'firebase/firestore';

export default function Users({ user }: any) {
  async function handleDeleteItem() {
    const docRef = doc(db, "users", user.id)

    await deleteDoc(docRef)
    .then(()=>{
      console.log("deletado com sucesso")
    })
    .catch((erro)=>{
      console.log(erro)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.item}>Nome: {user.nome}</Text>
      <Text style={styles.item}>Idade: {user.idade}</Text>
      <Text style={styles.item}>Cargo: {user.cargo}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDeleteItem}>
        <Text style={styles.buttonText}>Deletar usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  item: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#c42727',
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    padding: 8,
    color: '#fff',
    textAlign: 'center',
  },
});
