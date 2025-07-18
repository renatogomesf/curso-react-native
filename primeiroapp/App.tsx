import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Aula1a4 from './modul06 basico/aula 1 a 4/Aula1a4';
import States from './modul06 basico/aula 05/States';
import TamanhosDeF from './modul06 basico/aula 07/TamanhosDeF';
import FlexboxeAlinhamento from './modul06 basico/aula 08/FlexboxeAlinhamento';
import Inputs from './modul06 basico/aula 09/Inputs';
import Botoes from './modul06 basico/aula 10/Botoes';
import AppBiscoito from './modul06 basico/aula 11 app/AppBiscoito';
import Cronometro from './modul06 basico/aula 13 app/Cronometro';
import ScrollView from './modulo07 aprendendo mais/aula 02/ScrollView';
import Flatlist from './modulo07 aprendendo mais/aula 03/Flatlist';
import Componente01 from './modulo07 aprendendo mais/aula 04 separando componente/Componente01';
import Pickerr from './modulo07 aprendendo mais/aula 06/Picker';
import Sliderr from './modulo07 aprendendo mais/aula 07/Sliderr';
import Switchh from './modulo07 aprendendo mais/aula 08/Switchh';
import AppInsta from './modulo07 aprendendo mais/aula 09 Instagram/AppInsta';
import UseEffect from './modulo07 aprendendo mais/aula 11/UseEffect';
import UseEffectPT2 from './modulo07 aprendendo mais/aula 12/UseEffectPT2';
import UseMemo from './modulo07 aprendendo mais/aula 13/UseMemo';
import UseRef from './modulo07 aprendendo mais/aula 14/UseRef';
import Modall from './modulo07 aprendendo mais/aula 15/Modall';
import Icon from './modulo08 navegação/aula 01/Icon';
import Navegacao from './modulo08 navegação/aula 02/Navegacao';
import Tabs from './modulo08 navegação/aula 04/Tabs';
import Drawerr from './modulo08 navegação/aula 06/Drawerr';
import ReqHttp from './modulo09 avançando com RN/aula 01/ReqHttp';
import Conversor from './modulo09 avançando com RN/aula 04 Conversor de moedas/Conversor';
import BuscadorCep from './modulo09 avançando com RN/aula 08 buscador de cep/BuscadorCep';
import Animacoes from './modulo10 animações/aula 01/Animacoes';
import AnimacoesSequenciaParalelo from './modulo10 animações/aula 02/AnimacoesSequenciaParalelo';
import AnimacoesLoop from './modulo10 animações/aula 03/AnimacoesLoop';
import Interpolacao from './modulo10 animações/aula 04/Interpolacao';
import Animatables from './modulo10 animações/aula 05/Animatable';
import Introducao from './modulo11 firebase/aula 01 a 04/Introducao';
import Cadastro from './modulo11 firebase/aula 05 a 11/Cadastro';
import Auth from './modulo11 firebase/aula 12/Auth';
import RouteAppCarrinho from './modulo13 carrinho de compras/RouteAppCarrinho';
import ProductProvider from './modulo13 carrinho de compras/Context';
import Camera from './modulo14 camera/aula 01 a 03/Camera';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      {/* <Aula1a4 /> */}
      {/* <States/> */}
      {/* <TamanhosDeF /> */}
      {/* <FlexboxeAlinhamento /> */}
      {/* <Inputs /> */}
      {/* <Botoes /> */}
      {/* <AppBiscoito /> */}
      {/* <Cronometro /> */}
      {/* <ScrollView /> */}
      {/* <Flatlist /> */}
      {/* <Componente01 /> */}
      {/* <Pickerr /> */}
      {/* <Sliderr /> */}
      {/* <Switchh /> */}
      {/* <AppInsta /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectPT2 /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <Modall /> */}
      {/* <Icon /> */}
      {/* <Navegacao /> */}
      {/* <Tabs /> */}
      {/* <Drawerr /> */}
      {/* <ReqHttp /> */}
      {/* <Conversor /> */}
      {/* <BuscadorCep /> */}
      {/* <Animacoes /> */}
      {/* <AnimacoesSequenciaParalelo /> */}
      {/* <AnimacoesLoop /> */}
      {/* <Interpolacao /> */}
      {/* <Animatables /> */}
      {/* <Introducao /> */}
      {/* <Cadastro /> */}
      {/* <Auth/> */}
      {/* <NavigationContainer>
        <ProductProvider>
          <RouteAppCarrinho />
        </ProductProvider>
      </NavigationContainer> */}
      <Camera />
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
