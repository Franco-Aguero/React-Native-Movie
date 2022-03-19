import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: 'powderblue' },
            tabBarActiveTintColor:{ color: "white" },
        }}
    >
            <Tab.Screen 
                name="home"
                component={Home}
                options={{ 
                    title: "Home"
                }}
            />
            <Tab.Screen 
                name="favorites"
                component={Favorites}
                options={{ 
                    title: "Favoritos",
                }}
            />
            
        </Tab.Navigator>
    </NavigationContainer>
  )
}