import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressTracker from './ProgressTracker';
import BuyAgain from './BuyAgain';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRoute={'TabHome'}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="TabHome"
        component={ProgressTracker}
        options={{
          tabBarLabel: 'Progress Tracker',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="ticket-percent"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BuyAgain"
        component={BuyAgain}
        options={{
          tabBarLabel: 'Buy Again Flow',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
