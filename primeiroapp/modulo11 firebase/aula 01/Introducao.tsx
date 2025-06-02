import { View, Text, StyleSheet } from 'react-native';

export default function Introducao() {
  return (
    <View style={styles.container}>
      <Text style={''}>teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
