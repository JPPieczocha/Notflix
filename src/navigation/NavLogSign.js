import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/colors";
import Landing from '../pages/landing/Landing';

export default function NavLogSign({navigation}){

    const Stack = createNativeStackNavigator();
    // El navigation container está abstraido en el App.js

    //DE MOMENTO SIN USO
    //TODO: Delete file

    return(
        <Stack.Navigator>
            <Stack.Screen name="landing" component={Landing} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    );
}