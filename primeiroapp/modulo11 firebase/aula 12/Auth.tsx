import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { useEffect, useState } from 'react';

import { auth } from '../../firebase/firebaseConnection';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [authUser, setAuthUser] = useState({});

  useEffect(()=>{
    
    // onAuthStateChanged: verifica sem tem algum usuário autenticado/ usuário logado ou não.
    // passa a comunicação com o banco(sistema de autenticação) e ele retorna uma função anônima com um parâmetro que pode ter algo ou ser nulo. pode ter alguem logado ou não.
    const unsub = onAuthStateChanged(auth, (user)=>{
      if(user){
        setAuthUser({
          email: user.email,
          uid: user.uid,
        });

        console.log("tem um usuário logado")
        console.log(user.email)
        return
      }
    })
  },[])

  async function handleCreateUser() {
    // params: sitema de autenticação, email, senha(minimo de 6 caracteres pedidos pelo firebase)
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  }

  async function handleFazerLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log('USUÁRIO LOGADO');
        console.log(user);
        setAuthUser({
          email: user.user.email,
          uid: user.user.uid,
        });

        setEmail('')
        setPassword('')
      })
      .catch((error) => {
        if (error.code === 'auth/missing-password') {
          console.log('a senha é obrigatória');
          return;
        }

        console.log(error.code);
      });
  }

  async function handleLogout() {
    // verifica o usuário logado e desloga ele.
    await signOut(auth)
    setAuthUser({})
  }


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, marginLeft: 8, marginBottom: 14 }}>
        Usuário logado: {authUser && authUser?.email}
      </Text>

      <Text style={styles.text}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail..."
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.text}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha..."
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleFazerLogin}>
        <Text style={styles.buttonText}>Fazer login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
        <Text style={styles.buttonText}>Criar uma conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button,{backgroundColor: '#b42b2b'}]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  text: {
    marginLeft: 8,
    fontSize: 18,
    color: '#000',
  },
  input: {
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#000',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 18,
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
