import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/homescreen/HomeScreen';
import DetailScreen from '../screens/homescreen/DetailScreen';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={() => ({
        tabBarActiveTintColor: 'orange',
        headerTintColor: 'pink',
        tabBarLabelStyle: {fontSize: 14},
      })}>
      <Tab.Screen
        name="List"
        component={HomeScreen}
        options={() => ({
          headerShown: false,

          tabBarIcon: () => (
            <Image
              source={require('../assets/images/list.png')}
              style={{height: 27, width: 22}}
            />
          ),
        })}
      />

      <Tab.Screen
        name="Details"
        component={DetailScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/detail.png')}
              style={{height: 27, width: 22}}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
