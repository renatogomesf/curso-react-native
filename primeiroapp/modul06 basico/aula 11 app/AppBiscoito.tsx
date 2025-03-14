import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AppBiscoito() {
  const [img, setImg] = useState(require('../../src/biscoito.png'));

  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O bom-senso vai mais longe do que muito conhecimento.',
    'Quem quer colher rosas deve suportar os espinhos.',
    'São os nossos amigos que nos ensinam as mais valiosas lições.',
    'Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',
    'A adversidade é um espelho que reflete o verdadeiro eu.',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    'Uma bela flor é incompleta sem suas folhas.',
    'FRASE RARA!!!',
  ];

  function quebraBiscoito() {
    let numAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(`" ${frases[numAleatorio]} "`);
    setImg(require('../../src/biscoitoAberto.png'));
  }

  function reiniciarBiscoito() {
    setTextoFrase('');
    setImg(require('../../src/biscoito.png'));
  }

  return (
    <View style={styles.conteiner}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textofrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={() => quebraBiscoito()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Qubrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]}
        onPress={() => reiniciarBiscoito()}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
