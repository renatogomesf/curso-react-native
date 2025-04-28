// https://viacep.com.br/ws/60440220/json/

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  // garante que o app não fique sobre a status bar. principalmente quando estiver no iOS
  SafeAreaView,
  Keyboard,
} from 'react-native';

import api from './src/services/api';

import { useState, useRef, MutableRefObject, LegacyRef } from 'react';

interface DadosCep {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  estado: string;
}

export default function BuscadorCep() {
  const [cep, setCep] = useState('');

  const [dadosCep, setDadosCep] = useState<DadosCep | null>();

  const inputRef = useRef<TextInput | null>();

  async function buscar() {
    if (cep == '') {
      alert('Digite algo para buscar');
      setCep('');
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      setDadosCep(response.data);
      Keyboard.dismiss(); // fecha o teclado
    } catch (error) {
      console.log(error);
    }
  }

  function limpar() {
    setCep('');
    setDadosCep(null);
    inputRef.current?.focus();
  }

  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Digite o cep desejado</Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="teste"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#1d75cd' }]}
          onPress={buscar}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={limpar}
          style={[styles.botao, { backgroundColor: '#cd3e1d' }]}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {/* se tiver algo dentro de dadosCep, ai sim ele renderiza as tags */}
      {dadosCep && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {dadosCep?.cep}</Text>
          <Text style={styles.itemText}>
            Logradouro: {dadosCep?.logradouro}
          </Text>
          <Text style={styles.itemText}>Bairro: {dadosCep?.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {dadosCep?.localidade}</Text>
          <Text style={styles.itemText}>Estado: {dadosCep?.estado}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  botao: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 20,
    color: '#fff',
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
  },
});
