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

    return(
        <Stack.Navigator>
            <Stack.Screen name="landing" component={Landing} options={{headerShown:false}}></Stack.Screen>
            {/* 
            <Stack.Screen name="paquetesSelection" ></Stack.Screen>
            <Stack.Screen name="paymentMethod"></Stack.Screen>
            <Stack.Screen name="summary"></Stack.Screen> */}
        </Stack.Navigator>
    );
}