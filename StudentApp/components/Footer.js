import * as React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileScreen from './ProfileScreen';
import SubjectScreen from './SubjectsScreen';
import CourseScreen from './CourseScreen';

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();

  const icons = {
    Home: 'home',
    Profile: 'person',
    Settings: 'settings',
  };

  return (
    <View style={{ flexDirection: 'row', backgroundColor: colors.card }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              padding: 10,
            }}
          >
    
            <Icon
              name={icons[route.name] || 'help-outline'} 
              size={24}
              color={isFocused ? colors.primary : colors.text}
            />
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Footer({ username }) {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={CourseScreen}
        initialParams={{ username }} 
        options={{
          tabBarLabel: 'Courses',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ username }} 
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SubjectScreen}
        initialParams={{ username }} 
        options={{
          tabBarLabel: 'Subjects',
        }}
      />
    </Tab.Navigator>
  );
}
