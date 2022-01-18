import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import StudentPage from '../routes/StudentPage'
import AttendancePage from '../routes/AttendancePage'
import ClassPage from '../routes/ClassPage'
import { View, Image, Text } from 'react-native';

export default function App() {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Student API" component={StudentPage} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../assets/icons/student.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#007AFF' : '#ccc'
              }}
            />
          </View>
        ),
      }} />

      <Tab.Screen name="Attendance API" component={AttendancePage} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../assets/icons/attendance.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#007AFF' : '#ccc'
              }}
            />
          </View>
        ),
      }} />

      <Tab.Screen name="Class API" component={ClassPage} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../assets/icons/classroom.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#007AFF' : '#ccc'
              }}
            />
          </View>
        ),
      }} />



      {/* <Tab.Screen name="Photo" component={Photo} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../assets/icons/photo.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#007AFF' : '#ccc'
              }}
            />
          </View>
        ),
      }} /> */}
    </Tab.Navigator>
  );
}
