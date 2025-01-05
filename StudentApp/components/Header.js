import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <Appbar.Header style={styles.header}>
      <Text style={styles.title}>Uov Student Care</Text>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8b008b',
  },
  title: {
    flex: 1, 
    textAlign: 'center',
    fontSize: 20, 
    color:'white'
  },
});

export default Header;
