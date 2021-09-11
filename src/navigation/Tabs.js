import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/colors";
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import Search from '../pages/search/Search'

export default function Tabs({navigation}){

    const Tab = createBottomTabNavigator();
    // El navigation container está abstraido en el App.js

    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size}) => {
                let iconName;
                let iconColor
                if (route.name === 'Home') {
                    iconName = 'home-outline';
                } else if (route.name === 'Search') {
                    iconName = 'search';
                } else if(route.name === 'Settings'){
                    iconName = 'options';
                }
                iconColor = focused ? Colors.secondary : Colors.inactiveTint
                return <Ionicons name={iconName} size={24} color={iconColor} />;
            },
            tabBarShowLabel:false,
            tabBarStyle:{
                borderTopColor:Colors.secondary,
                borderTopWidth:2,
                backgroundColor: Colors.primaryv3
            },
            headerTitle: ({focused, size}) =>{
                if(route.name === 'Home'){
                    return <Image source={require('../assets/landing/Logo.png')} style={{width:150}} resizeMode={'contain'}></Image>
                }else if (route.name === 'Search') {
                    return <Text style={{color: Colors.white, fontSize: 20}}>Buscar</Text>
                } else if(route.name === 'Settings'){
                    return <Text style={{color: Colors.white, fontSize: 20}}>Perfil</Text>
                }
            },
        })}
        >
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                headerTitleStyle:{
                    color: 'white',
                },
                headerStyle:{
                    backgroundColor: Colors.primaryv3,
                },
                headerTitleAlign:'center',
            }}/>
            
            <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{
                headerTitleStyle:{
                    color: 'white'
                },
                headerStyle:{
                    backgroundColor: Colors.primaryv3,
                },
                headerTitleAlign:'center',
            }}/>
            
            <Tab.Screen 
            name="Settings" 
            component={Profile} 
            options={{
                headerTitleStyle:{
                    color: 'white'
                },
                headerStyle:{
                    backgroundColor: Colors.primaryv3,
                },
                headerTitleAlign:'center',
            }}/>
        </Tab.Navigator>
    );

}