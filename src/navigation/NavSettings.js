import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from "../constants/colors";

import Profile from './../pages/profile/Profile'
import Settings from '../pages/settings/Settings'

export default function NavSettings({navigation}){

    const Stack = createNativeStackNavigator();
    // El navigation container está abstraido en el App.js

    return(
        <Stack.Navigator
        initialRouteName={'Ajustes'}
        >
            <Stack.Screen
                name="Ajustes"
                component={Settings}
                options={{
                    headerShown: false,
                }}   
            />

        </Stack.Navigator>
    );

}