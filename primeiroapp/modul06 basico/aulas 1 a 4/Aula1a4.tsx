import { StyleSheet, Text, View, Image } from 'react-native';

export default function Aula1a4() {
  let nome = 'Renato o top';

  return (
    <View style={style.section}>
      <Text style={{ color: 'blue', fontWeight: 'bold' }}>Olá Mundo!</Text>
      <Text style={style.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ullam
        harum repellendus sunt ad commodi sint ex? Animi facere facilis maiores
        pariatur, perferendis id esse, at placeat veniam ad hic.
      </Text>

      <Image
        source={{ uri: 'https://sujeitoprogramador.com/reactlogo.png' }}
        style={{ width: 100, height: 100 }}
      />

      <Logo largura={200} altura={200} nome="Manual do Mundo." />

      <Text style={{ fontWeight: 'bold' }}>{nome}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 30,
    fontSize: 20,
  },
});

function Logo({ largura, altura, nome }: any) {
  let img = 'https://sujeitoprogramador.com/reactlogo.png';

  return (
    <>
      <Image source={{ uri: img }} style={{ width: largura, height: altura }} />
      <Text>{nome}</Text>
    </>
  );
}
