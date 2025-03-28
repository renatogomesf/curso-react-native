import { useEffect, useState, useMemo, useRef, RefObject } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UseMemo() {
  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    async function loadData() {
      await AsyncStorage.getItem('nome').then((value: string | any) =>
        setNome(value)
      );
    }

    loadData();
  }, []);

  async function gravaNome() {
    await AsyncStorage.setItem('nome', input);

    setNome(input);

    setInput('');
  }

  // memoriza um valor na constante e só muda o valor quando o que estiver no array de dependências mudar.
  const letrasNome = useMemo(() => {
    // so chama o que tem dentro da função anonima quando o que estiver no array de dependêmcias mudar.
    console.log('pegando quantidade de letras');
    return nome.length;
  }, [nome]);

  function chamarInput() {
    inputRef.current?.focus(); // foca no input onde o ref foi usado.
    inputRef.current?.clear(); // limpa o input
    console.log(inputRef.current?.isFocused()); // verifica e se o input está focado ou não. se estiver focado retorna true, se não estiver retorna false.
  }

  return (
    <View style={styles.conteiner}>
      <View style={styles.viewImput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
          ref={inputRef}
        />

        <TouchableOpacity onPress={gravaNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{nome}</Text>

      <Text style={styles.nome}>tem {letrasNome} letras</Text>

      <TouchableOpacity onPress={chamarInput}>
        <Text style={styles.botao}>chamar input</Text>
      </TouchableOpacity>
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
