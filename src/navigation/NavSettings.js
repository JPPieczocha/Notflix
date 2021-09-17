import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from "../constants/colors";

import Settings from '../pages/settings/Settings'
import ChangeMail from './../pages/settings/ChangeMail'
import ChangePassword from './../pages/settings/ChangePassword'

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
                    title: 'AJUSTES',
                    headerStyle:{
                        backgroundColor: Colors.primaryv3,
                    },
                    headerShadowVisible:false,
                    headerBackTitle:'Perfil',
                    headerTintColor: Colors.inactiveTint,
                    headerTitleAlign:'left',
                    headerTitleStyle:{
                        color: Colors.inactiveTint,
                        fontSize: 20,
                    },
                    headerShown:false
                }}   
            />

            <Stack.Screen
                name="ChangeMail"
                component={ChangeMail}
                options={{
                    title: 'CAMBIAR CORREO',
                    headerStyle:{
                        backgroundColor: Colors.primaryv3,
                    },
                    headerShadowVisible:false,
                    headerBackTitle:'Ajustes',
                    headerTintColor: Colors.inactiveTint,
                    headerTitleAlign:'left',
                    headerTitleStyle:{
                        color: Colors.inactiveTint,
                        fontSize: 20,
                    },
                    headerShown:false
                }}   
            />

            <Stack.Screen
                name="ChangeContraseña"
                component={ChangePassword}
                options={{
                    title: 'CAMBIAR CONTRASEÑA',
                    headerStyle:{
                        backgroundColor: Colors.primaryv3,
                    },
                    headerShadowVisible:false,
                    headerBackTitle:'Ajustes',
                    headerTintColor: Colors.inactiveTint,
                    headerTitleAlign:'left',
                    headerTitleStyle:{
                        color: Colors.inactiveTint,
                        fontSize: 20,
                    },
                    headerShown:false
                }}   
            />

        </Stack.Navigator>
    );

}