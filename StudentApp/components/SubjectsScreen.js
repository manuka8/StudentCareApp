import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import { students, courses } from "../StudentDb";
const SubjectScreen = ({ route }) => {
  const { username } = route.params;
  const user = students.find((student) => student.username === username);
  const course = courses.find((courses) => courses.id === user.course_id);
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineLarge" style={styles.name}>
            {course.name}
          </Text>
          <Text style={styles.details}>
            Code : {course.course_code} | Dept : {course.department}
          </Text>

          <View style={styles.contactinfo}>
            <Text style={styles.contactinfoheader}>Course Information</Text>
            <Text>
              Code : {course.course_code}
              {"\n"}Department : {course.department}
              {"\n"}Duration:{course.duration}
              {"\n"}Description:{course.description}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    padding: 10, // Added padding to ensure no content is touching the edges
  },
  imagecontainer: {
    alignItems: "center",
    width: "80%",
    height: 160,
    marginBottom: 20, // Added margin to separate image from text content
  },
  card: {
    width: "100%",
    alignItems: "center",
    padding: 20, // Added padding for better content spacing inside the card
    borderRadius: 10, // Optional: rounded corners for the card
    backgroundColor: "#f9f9f9", // Light background color for the card
  },
  name: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 10, // Added vertical margin for spacing between name and details
    fontWeight: "bold", // Optional: makes the name text bold
  },
  details: {
    textAlign: "center",
    marginTop: 10, // Margin for spacing between name and other details
    fontSize: 16, // Slightly smaller font size for details
    color: "#555", // Soft grey color for details text
  },
  contactinfo: {
    alignItems: "gight",
  },
});

export default SubjectScreen;
