import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRoute={'Home'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="StackHome" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
