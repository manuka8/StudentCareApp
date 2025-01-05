import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Header from '../components/Header'; 

const Login = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.logocontainer}>
        <Image
          source={require('../assets/logo.png')} 
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logocontainer: {
    width: '90%', 
    height: 200, 
    alignSelf: 'center',
    backgroundColor: 'white', 
    overflow: 'hidden',
  },
  logo: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain', 
  },
});

export default Login;
