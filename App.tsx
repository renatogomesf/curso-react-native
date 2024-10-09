import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "red",
    width: 100,
    height: 200,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
