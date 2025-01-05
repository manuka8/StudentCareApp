import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = ({ route }) => {
    const { userId, username } = route.params;
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.logocontainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text>{userId}{username}</Text>
      </View>
      <View>
      
    </View>
      <Footer/>
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
  text: {
    fontSize: 20,
  },
});

export default Profile;
