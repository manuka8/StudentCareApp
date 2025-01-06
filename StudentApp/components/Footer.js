import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CourseScreen from './CourseScreen';
import ProfileScreen from './ProfileScreen';
import SubjectsScreen from './SubjectsScreen';

const Tab = createBottomTabNavigator();

export default function Footer({ username }) {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const icons = {
        Course: focused ? 'book' : 'book-outline',
        Profile: focused ? 'person' : 'person-outline',
        Subjects: focused ? 'list' : 'list-outline',
      };

      return <Ionicons name={icons[route.name]} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ username }}
      />
      <Tab.Screen
        name="Course"
        component={CourseScreen}
        initialParams={{ username }}
      />
      
      <Tab.Screen
        name="Subjects"
        component={SubjectsScreen}
        initialParams={{ username }}
      />
    </Tab.Navigator>
  );
}
