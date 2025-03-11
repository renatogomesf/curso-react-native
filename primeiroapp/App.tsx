import { StyleSheet, Text, View, Image } from 'react-native';

import Aula1a4 from './modul06 basico/aulas 1 a 4/Aula1a4';
import States from './modul06 basico/aula 05/States';

export default function App() {
  return (
    <View style={style.section}>
      {/* <Aula1a4 /> */}
      <States/>
    </View>
  );
}

const style = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
