import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from "../constants/colors";

import Profile from './../pages/profile/Profile'
import Settings from '../pages/settings/Settings'

export default function NavLogSign({navigation}){

    const Stack = createNativeStackNavigator();
    // El navigation container está abstraido en el App.js

    return(
        <Stack.Navigator>
            
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}   
            />

            <Stack.Screen
                name="Ajustes"
                component={Settings}
                options={{
                    // headerShown: false
                    // title: 'AJUSTES',
                    // headerTitleStyle:{
                    //     color: 'white'
                    // },
                    // headerStyle:{
                    //     backgroundColor: Colors.primaryv3,
                    // },
                    // headerTitleAlign:'center'
                }}   
            />

        </Stack.Navigator>
    );

}

/*
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
*/