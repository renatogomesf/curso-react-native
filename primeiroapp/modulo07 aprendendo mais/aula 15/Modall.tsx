import { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';

export default function Modall() {
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.conteiner}>
      <Button title="acessar" onPress={abrirModal} />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modal}>
          <View>
            <Text>Seja bem-vindo!!</Text>
            <Button title="sair" onPress={abrirModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    width: 300,
    height: 300,
    margin: 'auto',
    borderRadius: 10,
  },
});
