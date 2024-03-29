import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { colors } from '../utils/colors';

import HomeScreen from '../screens/home';
import TrackingScreen from '../screens/tracking';
import AccountScreen from '../screens/account';

const Tab = createMaterialBottomTabNavigator();
const { tertiary, light, dark } = colors;

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Map'
      activeColor={light}
      inactiveColor={dark}
      barStyle={{ backgroundColor: tertiary }}
    >
      <Tab.Screen
        name='Map'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home-roof' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Tracking'
        component={TrackingScreen}
        options={{
          tabBarLabel: 'Tracking',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='map-marker-radius-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='account-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
