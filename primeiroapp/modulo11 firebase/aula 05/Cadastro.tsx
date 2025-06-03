import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useEffect, useState } from 'react';

// instancia do banco de dados que faz a conecção.
import { db } from '../../firebase/firebaseConnection';

// doc: conecnta ao db numa coleção e documento específico.
// getDoc: pega as informações do "doc"
import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  collection,
  addDoc,
} from 'firebase/firestore';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cargo, setCargo] = useState('');

  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    async function getDados() {
      // const docref = doc(db, "users", "1")
      // // busca 1 vez no banco de dados
      // getdoc("doc de referencia")
      // getDoc(docref)
      // .then((snapshot)=>{
      //  setNome(snapshot.data()?.nome)
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
      // fica observando o banco de dados e retorna as mudanças
      // onSnapshot(doc(db, 'users', '1'), (doc) => {
      //   setNome(doc.data()?.nome);
      // });
    }

    getDados();
  }, []);

  async function handleRegister() {
    //doc("conecta com o banco","seleciona a coleção","seleciona o id (caso não exista ele cria)")
    // setdoc("doc de referencia", o que deseja adicionar)
    // cadastra algo "na mão"
    // await setDoc(doc(db, "users", "3"), {
    //   // o que deseja colocar dentro do id. e deve seguir a estrutura da coleção.
    //   nome: 'jose',
    //   idade: '30',
    //   cargo: 'backend'
    // })
    // .then(()=>{
    //   console.log("cadastrado com sucesso")
    // })
    // .catch((erro)=>{
    //   console.log(erro)
    // })

    // adddoc("coleção de referencia", "propriedades que quer cadastrar no banco")
    // collection("conecção com banco", "qual coleção deseja acessar")
    // cria um novo usuário com id aleatório. diferente do setDoc que eu preciso passar um id.

    if (!nome || !idade || !cargo) {
      alert('preencha todos os campos');
      return;
    }

    await addDoc(collection(db, 'users'), {
      // propriedades que deseja cadastrar no banco
      nome: nome,
      idade: idade,
      cargo: cargo,
    })
      .then(() => {
        console.log('cadastrado com sucesso.');
        setNome('');
        setIdade('');
        setCargo('');
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <View style={styles.container}>
      {showForm && (
        <View>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua idade..."
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />

          <Text style={styles.label}>Cargo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu cargo..."
            value={cargo}
            onChangeText={(text) => setCargo(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowForm(!showForm)}
      >
        <Text style={styles.buttonText}>
          {showForm ? 'Esconder' : 'Mostrar'} formulário
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#000',
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    padding: 8,
    color: '#fff',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
});
