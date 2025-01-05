import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Header from '../components/Header'; 
import { TextInput ,Button} from 'react-native-paper';
import {students} from '../StudentDb'
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
      <View style={styles.form}>
        <TextInput
          mode="outlined"
          label="Username"
          placeholder="Enter your Username here"
          style={styles.textinput}
        />
        <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          style={styles.textinput}
        />
        <Button  mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
          Login
        </Button>
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
  form:{
    flex:1,
    alignItems:'center',
    width:'100%'
  },
  textinput:{
    width:'80%',
    margin:15
  },
  button:{
    width:'80%',
    margin:15
  }
});

export default Login;
