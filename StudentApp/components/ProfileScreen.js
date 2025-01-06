import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, Divider, Text } from "react-native-paper";
import { students } from "../StudentDb";

const ProfileScreen = ({ route }) => {
  const { username } = route.params;

  const user = students.find((student) => student.username === username);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", fontSize: 18 }}>
          User not found. Please try again.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            {/* Profile Picture */}
            <View style={styles.imageContainer}>
              <Avatar.Image
                size={150}
                source={user.profile_pic}
                style={styles.image}
              />
            </View>

            {/* User Name */}
            <Text variant="headlineLarge" style={styles.name}>
              {user.name}
            </Text>
            <Text style={styles.details}>
              Age: {user.age} | Gender: {user.gender}
            </Text>
            <Divider />

            {/* Contact Information */}
            <View style={styles.infoSection}>
              <Text style={styles.infoHeader}>Contact Information</Text>
              <Text style={styles.infoText}>
                Email: {user.email}
                {"\n"}Phone: {user.phone}
                {"\n"}Address: {user.address}
              </Text>
            </View>

            {/* Biological Information */}
            <View style={styles.infoSection}>
              <Text style={styles.infoHeader}>Biological Information</Text>
              <Text style={styles.infoText}>
                Gender: {user.gender}
                {"\n"}Age: {user.age}
                {"\n"}Blood Group: {user.blood_group}
              </Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    elevation: 3,
  },
  name: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  details: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 15,
    fontSize: 16,
    color: "#555",
  },
  infoSection: {
    marginTop: 20,
  },
  infoHeader: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 22,
  },
});

export default ProfileScreen;
