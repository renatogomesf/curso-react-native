// Documentação: https://github.com/react-native-picker/picker

// Comando para instalar: npm install @react-native-picker/picker

// Depois basta importar: import {Picker} from '@react-native-picker/picker';

import { View, Text, StyleSheet } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function Pickerr() {
  const [carroSelecionado, setCarroSelecionado]: any = useState();

  const [carros, setCarros] = useState([
    { key: 1, nome: 'Golf 1.6', valor: 62000 },
    { key: 2, nome: 'Saveiro 1.6', valor: 40000 },
    { key: 3, nome: 'Celta 1.0', valor: 34000 },
    { key: 4, nome: 'Gol 1.6', valor: 30000 },
    { key: 5, nome: 'Kwid 1.0', valor: 70000 },
    { key: 6, nome: 'Classic 1.0', valor: 33000 },
    { key: 7, nome: 'HB20 1.0', valor: 60000 },
  ]);

  return (
    <View style={styles.conteiner}>
      <Picker
        selectedValue={carroSelecionado}
        onValueChange={(item, index) => setCarroSelecionado(item)}
        mode="dropdown"
        numberOfLines={1}
        dropdownIconColor={'blue'}
        dropdownIconRippleColor={'green'}
      >
        {carros.map((item, index) => {
          return (
            <Picker.Item
              style={{ backgroundColor: 'gray' }}
              enabled={true}
              key={index}
              value={index}
              label={item.nome}
            />
          );
        })}
      </Picker>

      <Text style={styles.carros}>Carro: {carros[carroSelecionado]?.nome}</Text>
      <Text style={styles.carros}>R$: {carros[carroSelecionado]?.valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  carros: {
    marginTop: 15,
    fontSize: 25,
  },
});
