import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { useEffect, useState } from 'react';

import Users from './Users';

// instancia do banco de dados que faz a conecção.
import { db, auth } from '../../firebase/firebaseConnection';

// doc: conecnta ao db numa coleção e documento específico.
// getDoc: pega as informações do "doc"
import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import { signOut } from 'firebase/auth';

interface User {
  id: string;
  nome: string;
  idade: string;
  cargo: string;
}

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cargo, setCargo] = useState('');

  const [showForm, setShowForm] = useState(true);

  const [isEditing, setIsEditing] = useState('');

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getDados() {
      // caso deseje um item, usa-se "doc". caso eu queira uma lista, usa-se "collection"
      const usersRef = collection(db, 'users');

      onSnapshot(usersRef, (snapshot) => {
        let lista: User[] = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            idade: doc.data().idade,
            cargo: doc.data().cargo,
          });
        });

        setUsers(lista);
      });

      // getDocs(usersRef)
      //   .then((snapshot) => {
      //     let lista: User[] = [];

      //     snapshot.forEach((doc) => {
      //       lista.push({
      //         id: doc.id,
      //         nome: doc.data().nome,
      //         idade: doc.data().idade,
      //         cargo: doc.data().cargo,
      //       });
      //     });

      //     setUsers(lista);
      //   })
      //   .catch((erro) => {
      //     console.log(erro);
      //   });
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

  async function handleEdit() {
    const docRef = doc(db, 'users', isEditing);

    // updateDoc("conecção com db, coleção e item da coleção", {"o que deseja atualizar do item"})
    await updateDoc(docRef, {
      nome: nome,
      idade: idade,
      cargo: cargo,
    });

    setNome('');
    setIdade('');
    setCargo('');
    setIsEditing('');
  }

  function editUser(data: any) {
    setNome(data.nome);
    setIdade(data.idade);
    setCargo(data.cargo);
    setIsEditing(data.id);
  }

  async function handleLogout() {
    await signOut(auth)
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

          {isEditing !== '' ? (
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>Editar Usuário</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Adicionar Usuário</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <TouchableOpacity
        style={styles.buttonShow}
        onPress={() => setShowForm(!showForm)}
      >
        <Text style={''}>{showForm ? 'Esconder' : 'Mostrar'} formulário</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 14, marginLeft: 8, fontSize: 20 }}>
        Usuários
      </Text>
      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Users user={item} hendleEdit={(item: any) => editUser(item)} />
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={[styles.buttonText, {backgroundColor: '#727e0a'}]}>Sair da conta</Text>
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
  buttonShow: {
    color: '#000',
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
    alignItems: 'center',
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
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
});
