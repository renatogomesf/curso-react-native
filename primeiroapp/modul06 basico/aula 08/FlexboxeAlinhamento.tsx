import { View, Text } from 'react-native';

export default function FlexboxeAlinhamento() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
      <View
        style={{ height: 50, width: 50, backgroundColor: '#2b2a2a' }}
      ></View>
      <View
        style={{ height: 50, width: 50, backgroundColor: '#8d6464' }}
      ></View>
      <View
        style={{ height: 50, width: 50, backgroundColor: '#305a5a' }}
      ></View>
    </View>
  );
}
