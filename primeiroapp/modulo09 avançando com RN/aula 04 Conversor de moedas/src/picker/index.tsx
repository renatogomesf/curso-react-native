import { View, Text } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react';

export default function PickerItem({ moeda, onChange }: any) {
  return (
    <Picker onValueChange={(item) => onChange(item)}>
        <Picker.Item value="default" key={0} label="Selecione uma Moeda" />
      {moeda.map((item: any, index: any) => {
        return <Picker.Item value={item.key} key={index} label={item.key} />;
      })}
    </Picker>
  );
}
