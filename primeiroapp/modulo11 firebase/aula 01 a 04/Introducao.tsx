import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

// instancia do banco de dados que faz a conecção.
import { db } from '../../firebase/firebaseConnection';

// doc: conecnta ao db numa coleção e documento específico.
// getDoc: pega as informações do "doc"
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

export default function Introducao() {

  const [nome, setNome] = useState('carregando...')

  useEffect(()=>{
    async function getDados() {

      // const docref = doc(db, "users", "1")
      
      // // busca 1 vez no banco de dados
      // getDoc(docref)
      // .then((snapshot)=>{
      //  setNome(snapshot.data()?.nome)
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })

      // fica observando o banco de dados e retorna as mudanças
      onSnapshot(doc(db,"users","1"), (doc)=>{
        setNome(doc.data()?.nome)
      })
    }

    getDados()
  },[])

  return (
    <View style={styles.container}>
      <Text style={''}>Nome: {nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
