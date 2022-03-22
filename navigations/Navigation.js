import React from 'react';
import { StyleSheet } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Image } from 'react-native-elements';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    const iconReturn = (route, color) => {   
        let iconName = {
            home: "home-outline",
            favorites: "heart-outline",
            settings: "cog-outline",
            news: "newspaper-variant-outline",
        };
        return (<Icon
            type="material-community"
            name={ iconName[route.name] }
            fontSize={22}
            color={color}  
        />)
    } 

  return (
    <NavigationContainer>
        <Tab.Navigator
        tabBarPosition="top"
        initialRouteName="favorites"
        tabBarShowLabel={false}
        sceneContainerStyle={{backgroundColor:"black"}} /* is for container screens */
        headerTitleAlign='center'
        screenOptions={ ({ route }) => ({     
            tabBarIcon: ({ color }) => iconReturn(route, color),
            tabBarActiveTintColor:"red",
            tabBarInactiveTintColor:"white",    
            headerTitle: () => <LogoTitle/>, 
            headerTitleAlign: 'center',
            headerStyle: styles.headerBar,    /* is for top bar */
            tabBarStyle: styles.bottomBar,   /* is for Bottom bar*/
        })}        
    >
            <Tab.Screen name="news" component={Home} />
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="favorites" component={Favorites} options={{tabBarBadge: 3 }} />     
            <Tab.Screen name="settings" component={Home} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
const LogoTitle = () => { //App Logo
    return ( 
        <Link to={{ screen: 'home'}}>
            <Image
                style={{ width: 100, height: 25 }}
                source={require('../assets/netflix.png')}
                resizeMode='contain'                 
                />
        </Link>
    )
};

const styles = StyleSheet.create({
    headerBar:{
        backgroundColor: 'black',borderStyle: 'solid', 
        borderBottomColor:"red", borderWidth:1 
    },
    bottomBar:{
        position:"absolute", backgroundColor:"black",
        borderTopColor:"red", borderStyle:'solid',
        borderStartWidth:1, borderTopWidth:1, borderEndWidth:1, 
        borderTopLeftRadius:16, borderTopRightRadius:16,
    }
});