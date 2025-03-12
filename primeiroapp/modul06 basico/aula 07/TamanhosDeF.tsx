import { View, Text } from 'react-native';

export default function TamanhosDeF() {
  return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
      <View style={{ height: 65, backgroundColor: '#121212' }}></View>
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Text>texto</Text>
      </View>
      <View style={{ height: 65, backgroundColor: '#121212' }}></View>
    </View>
  );
}
