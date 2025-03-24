import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../img/logo.png')} style={styles.logo} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../img/send.png')} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray',
    shadowColor: '#000',
    elevation: 4
  },
  send: {
    width: 23,
    height: 23
  },
  logo: {
    
  }
});
