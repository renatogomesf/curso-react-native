import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Scrollview() {
  return (
    <View style={styles.conteiner}>
      {/* carrega tudo que estiver dentro da tag. flatlist preserva a memória e só carrega o que está em tela. o resto da lista não é renderizada*/}
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        <View style={styles.box5}></View>
        <View style={styles.box1}></View>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.box1, { width: 300 }]}></View>
        <View style={[styles.box2, { width: 300 }]}></View>
        <View style={[styles.box3, { width: 300 }]}></View>
        <View style={[styles.box4, { width: 300 }]}></View>
        <View style={[styles.box5, { width: 300 }]}></View>
        <View style={[styles.box1, { width: 300 }]}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  box1: {
    width: 150,
    height: 250,
    backgroundColor: '#fe3867',
  },
  box2: {
    width: 150,
    height: 250,
    backgroundColor: 'gray',
  },
  box3: {
    width: 150,
    height: 250,
    backgroundColor: 'black',
  },
  box4: {
    width: 150,
    height: 250,
    backgroundColor: 'green',
  },
  box5: {
    width: 150,
    height: 250,
    backgroundColor: 'blue',
  },
});
