import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import { students, courses } from "../StudentDb";
const CourseScreen = ({ route }) => {
  const { username } = route.params;
  const user = students.find((student) => student.username === username);
  const course = courses.find((courses) => courses.id === user.course_id);
  const subjects = courses.find((courses) => courses.id === user.course_id);
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

          <View style={styles.courseinfo}>
            <Text style={styles.courseinfoheader}>Course Information</Text>
            <Text>
              Code :              {course.course_code}
              {"\n"}Department :  {course.department}
              {"\n"}Duration:         {course.duration}
              {"\n"}Description:    {course.description}
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
    padding: 10}, 
  imagecontainer: {
    alignItems: "center",
    width: "80%",
    height: 160,
    marginBottom: 20, 
  },
  card: {
    width: "100%",
    alignItems: "center",
    padding: 20, 
    borderRadius: 10, 
    backgroundColor: "#f9f9f9", 
  },
  name: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 10, 
    fontWeight: "bold", 
  },
  details: {
    textAlign: "center",
    marginTop: 10, 
    fontSize: 16, 
    color: "#555", 
  },
  courseinfo:{
    alignItems:'right',
    marginTop:15
},
courseinfoheader:{
  fontWeight: 'bold',
  fontSize:15,
  marginBottom:15,
  textAlign:'left'
},
});

export default CourseScreen;
