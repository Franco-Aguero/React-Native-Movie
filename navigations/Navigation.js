import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { Image } from 'react-native-elements';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();


export default function Navigation() {

    const iconReturn = (route, color) => {
        let iconName = {
            home: "home-outline",
            favorites: "heart-outline"
        };
        return (<Icon
            type="material-community"
            name={ iconName[route.name] }
            fontSize={22}
            color={color}  
        />)
    } 
/* tabBarOptions:{
                inactiveTintColor: "white",
                activeTintColor: "red",
            } */
  return (
    <NavigationContainer>
        <Tab.Navigator
        tabBarPosition="top"
        initialRouteName="favorites"
        tabBarShowLabel={false}
        screenOptions={ ({ route }) => ({
            tabBarIcon: ({ color }) => iconReturn(route, color),
            tabBarActiveTintColor:"red",
            tabBarInactiveTintColor:"white",
            /*headerShown: false, = remove bar header
            tabBarShowLabel:false, = show name of screen in navbar bottom*/
            /* headerTitle:false,
            headerTitleStyle:false,
            headerShadowVisible:false,
             */

            
            headerTitle:"Netflix",
            /* headerTitle: (props) => ( // App Logo
            <Image
                style={{ width: 100, height: 25 }}
                source={require('../assets/netflix.png')}
                resizeMode='contain'
            />
            ), */
              
            headerStyle:styles.container,
            
            tabBarStyle:{ backgroundColor:"blue", borderTopLeftRadius:10, borderTopRightRadius:10}/* is bar Bottom */
        })}
            
    >
            <Tab.Screen 
                name="home"
                component={Home}
                
            />
            <Tab.Screen 
                name="favorites"
                component={Favorites}
                
            />
            
        </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
    container: {
      display:"flex",
      width:"100%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow',
    }});