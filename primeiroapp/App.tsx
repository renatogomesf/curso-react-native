import { View, StatusBar } from 'react-native';

import Aula1a4 from './modul06 basico/aula 1 a 4/Aula1a4';
import States from './modul06 basico/aula 05/States';
import TamanhosDeF from './modul06 basico/aula 07/TamanhosDeF';
import FlexboxeAlinhamento from './modul06 basico/aula 08/FlexboxeAlinhamento';
import Inputs from './modul06 basico/aula 09/Inputs';
import Botoes from './modul06 basico/aula 10/Botoes';
import AppBiscoito from './modul06 basico/aula 11 app/AppBiscoito';
import Cronometro from './modul06 basico/aula 13 app/Cronometro';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      {/* <Aula1a4 /> */}
      {/* <States/> */}
      {/* <TamanhosDeF /> */}
      {/* <FlexboxeAlinhamento /> */}
      {/* <Inputs /> */}
      {/* <Botoes /> */}
      {/* <AppBiscoito /> */}
      <Cronometro />
    </View>
  );
}

// const style = StyleSheet.create({
//   section: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
