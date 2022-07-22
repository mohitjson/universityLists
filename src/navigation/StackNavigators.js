import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/splashscreen';
import HomeScreen from '../screens/homescreen/HomeScreen';
import BottomTab from './BottomTabNavigators';

const Stack = createNativeStackNavigator();

function InitialRouter() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default InitialRouter;
