import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import PickerItem from './src/picker';
import { useEffect, useState } from 'react';
import { api } from './src/services/api';

export default function Conversor() {
  const [moeda, setMoeda] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('all');

      let arrayMoedas: any = [];

      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        });
      });

      setMoeda(arrayMoedas);
      setLoading(false);
    }

    loadMoedas();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#101215',
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Selecione sua moeda</Text>
          <PickerItem
            moeda={moeda}
            onChange={(item: any) => setMoedaSelecionada(item)}
          />
        </View>

        <View style={styles.areaValor}>
          <Text style={styles.titulo}>
            Digite um valor para converter em (R$)
          </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="ex: 1.50"
          />
        </View>

        <TouchableOpacity style={styles.botaoArea}>
          <Text style={styles.botaoText}>Converter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
  },
  areaMoeda: {
    backgroundColor: '#F9F9F9',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
    marginBottom: 1,
  },
  titulo: {
    fontSize: 16,
    paddingLeft: 5,
    paddingTop: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  areaValor: {
    backgroundColor: '#F9F9F9',
    width: '90%',
    padding: 8,
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 18,
    color: '#000',
  },
  botaoArea: {
    width: '90%',
    backgroundColor: '#Fb4b57',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  botaoText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
