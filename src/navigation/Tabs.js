import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Colors from "../constants/colors";
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import Search from '../pages/search/Search'

import NavSettings from './NavSettings'

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
              //Retorno el icono para cada caso
                return <Ionicons name={iconName} size={24} color={iconColor} />;
            },
            tabBarShowLabel:false,
            tabBarStyle:{
                borderTopColor:Colors.secondary,
                borderTopWidth:2,
                display: getFocusedRouteNameFromRoute(route) === 'Ajustes' ? 'none' : 'flex',
                backgroundColor: Colors.primaryv3

            },
            
        })}
        >
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                title: 'LOGO',
                headerTitleStyle:{
                    color: 'white'
                },
                headerStyle:{
                    // backgroundColor: Colors.primary,
                    backgroundColor: Colors.primaryv3,
                },
                headerTitleAlign:'center'
            }}/>
            
            <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{
                title: 'Buscar',
                headerTitleStyle:{
                    color: 'white'
                },
                headerStyle:{
                    backgroundColor: Colors.primaryv3,
                },
                headerTitleAlign:'center'
            }}/>
            
            <Tab.Screen 
            name="Settings" 
            component={NavSettings}
            options={({ route }) => ({
                title: 'Perfil',
                headerTitleStyle:{
                    color: 'white'
                },
                headerStyle:{
                    backgroundColor: Colors.primaryv3,
                },
                headerShown: getFocusedRouteNameFromRoute(route) === 'Ajustes' ? false : true, 
                headerTitleAlign:'center'
            })}
            />

        </Tab.Navigator>
    );

}