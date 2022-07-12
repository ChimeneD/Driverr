import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/home';

const Tab = createMaterialBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Map" component={HomeScreen} />
        <Tab.Screen name="Tracking" component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation
