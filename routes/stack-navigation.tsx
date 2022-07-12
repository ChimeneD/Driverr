import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './tab-navigation';

import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Sign in" component={LoginScreen} />
        <Stack.Screen name="Sign up" component={RegisterScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigation
