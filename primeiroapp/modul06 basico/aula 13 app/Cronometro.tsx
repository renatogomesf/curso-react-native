import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

let timer: any = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function Cronometro() {
  const [numero, setNumero] = useState('00:00:00');
  const [botao, setBotao] = useState('Iniciar');
  const [ultimo, setUltimo] = useState('');

  // setInterval(()=>setSegundos(segundos + 1), 1000)

  function iniciar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotao('Iniciar');
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${
          ss < 10 ? `0${ss}` : ss
        }`;

        setNumero(format);
      }, 1000);
      setBotao('Parar');
    }
  }

  function limpar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotao('Iniciar');
    }

    setUltimo(numero);

    setNumero('00:00:00');
    ss = 0;
    mm = 0;
    hh = 0;
  }

  return (
    <View style={styles.conteiner}>
      <Image source={require('../../src/crono.png')} />

      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoUltimoTempo}>
          {ultimo ? `Ultimo tempo ${ultimo}` : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -170,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltima: {
    marginTop: 50,
  },
  textoUltimoTempo: {
    fontSize: 23,
    color: '#fff',
    fontStyle: 'italic',
  },
});
