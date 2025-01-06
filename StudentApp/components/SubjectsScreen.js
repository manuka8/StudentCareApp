import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Divider, Text } from "react-native-paper";
import { students, courses, subjects, marks } from "../StudentDb";

const SubjectScreen = ({ route }) => {
  const { username } = route.params;

  const user = students.find((student) => student.username === username);

  const course = courses.find((course) => course.id === user.course_id);

  const filteredSubjects = subjects.filter(
    (subject) => subject.course_id === course.id
  );

  const filteredMarks = marks.filter((mark) => mark.student_id === user.id);

  const subjectWithMarks = filteredSubjects.map((subject) => {
    const subjectMark = filteredMarks.find(
      (mark) => mark.subject_id === subject.id
    );
    return {
      ...subject,
      marks: subjectMark ? subjectMark.marks : "N/A", 
    };
  });

  const totalMarks = subjectWithMarks.reduce(
    (sum, item) => (typeof item.marks === "number" ? sum + item.marks : sum),
    0
  );
  const averageMarks =
    subjectWithMarks.length > 0 ? totalMarks / subjectWithMarks.length : 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineLarge" style={styles.name}>
            {course.name}
          </Text>

          
          <Text style={styles.details}>
            {subjectWithMarks.length} Subjects | Average: {averageMarks.toFixed(2)}
          </Text>
          <Divider/>
          <Text style={styles.header}>
            Marks Information
          </Text>
          <View style={styles.table}>
            <View style={[styles.row, styles.headerRow]}>
              <Text style={[styles.cell, styles.headerCell]}>Subject Name</Text>
              <Text style={[styles.cell, styles.headerCell]}>Marks</Text>
            </View>
            {subjectWithMarks.map((subject, index) => (
              <View
                key={subject.id}
                style={[styles.row, index % 2 === 0 ? styles.evenRow : null]}
              >
                <Text style={styles.cell}>{subject.name}</Text>
                <Text style={styles.cell}>{subject.marks}</Text>
              </View>
            ))}
          </View>

          
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
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
    marginBottom:15
  },
  table: {
    marginTop: 20,
    width: "100%",
    borderWidth: 0,
    borderColor: "#ddd",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerRow: {
    backgroundColor: "#f1f8ff",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    fontSize: 16,
  },
  headerCell: {
    fontWeight: "bold",
  },

  header:{
    fontWeight: 'bold',
    fontSize:15,
    marginTop:15,
    marginBottom:15,
    textAlign:'left'
  }
});

export default SubjectScreen;
