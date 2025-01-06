import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Avatar,Card ,Divider,Text} from 'react-native-paper';
import { students } from '../StudentDb';
const ProfileScreen = ({ route }) => {
    const { username } = route.params;
    const user = students.find(
        (student) => student.username === username 
      );
  return (
    <View style={styles.container}>
        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.imagecontainer}>
                    <Avatar.Image size={150} source={user.profile_pic} style={styles.image}/>
                </View>
                <Text variant="headlineLarge" style={styles.name}>{user.name}</Text>
                <Text style={styles.details}>Age : {user.age} | Gender : {user.gender}</Text>
                <Divider/>
                <View style={styles.contactinfo}>
                    <Text style={styles.contactinfoheader}>Contact Information</Text>
                    <Text >Email        : {user.email}{'\n'}Phone      :{user.phone}{'\n'}Address   :{user.address}</Text>
                </View>

                <View style={styles.bioinfo}>
                    <Text style={styles.bioinfoheader}>Biological Information</Text>
                    <Text >Gender           : {user.gender}{'\n'}Age                 : {user.age}{'\n'}blood Group  : {user.blood_group}</Text>
                </View>
            </Card.Content>
        </Card>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      width: '100%',
      padding: 10, 
    },
    imagecontainer: {
      alignItems: 'center',
      width: '80%',
      height: 160,
      marginBottom: 20, 
    },
    card: {
      width: '100%',
      alignItems: 'center',
      padding: 10, 
      borderRadius: 10, 
      backgroundColor: '#f9f9f9',
    },
    name: {
      fontSize: 30,
      textAlign: 'center',
      marginVertical: 10,
      fontWeight: 'bold',
    },
    details: {
      textAlign: 'center',
      marginTop: 5,
      marginBottom:15, 
      fontSize: 16,
      color: '#555', 
    },
    contactinfo:{
        alignItems:'right',
        marginTop:15
    },
    contactinfoheader:{
      fontWeight: 'bold',
      fontSize:15,
      marginBottom:15,
      textAlign:'left'
    },
    bioinfo:{
      alignItems:'right',
      marginTop:15
    },
    bioinfoheader:{
      fontWeight: 'bold',
      fontSize:15,
      marginBottom:10,
      textAlign:'left'
    }
  });
  
  


export default ProfileScreen;
