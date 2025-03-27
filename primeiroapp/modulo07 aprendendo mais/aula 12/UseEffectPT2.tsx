import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UseEffectPT2() {
  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');

  useEffect(()=>{
    async function loadData() {
      await AsyncStorage.getItem('nome')
      .then((value:string | any)=>setNome(value))
    }

    loadData()
  },[])

  async function gravaNome() {
    await AsyncStorage.setItem('nome', input);

    setNome(input);

    setInput('')
  }

  return (
    <View style={styles.conteiner}>
      <View style={styles.viewImput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
        />

        <TouchableOpacity onPress={gravaNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35,
  },
  viewImput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
  },
});
