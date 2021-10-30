import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../constants/colors";

import Settings from '../pages/settings/Settings'
import ChangeMail from './../pages/settings/ChangeMail'
import ChangePassword from './../pages/settings/ChangePassword'
import ChangeCreditCard from './../pages/settings/ChangeCreditCard'
import ChangePackage from './../pages/settings/ChangePackage'


export default function NavSettings({navigation}){

    const Stack = createStackNavigator();

    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });
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
                    cardStyleInterpolator: forFade,
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
                    cardStyleInterpolator: forFade,
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
                    cardStyleInterpolator: forFade,
                }}   
            />
            
            <Stack.Screen
                name="ChangeTarjeta"
                component={ChangeCreditCard}
                options={{
                    title: 'CAMBIAR TARJETA',
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
                    cardStyleInterpolator: forFade,
                }}   
            />

            <Stack.Screen
                name="ChangePaquete"
                component={ChangePackage}
                options={{
                    title: 'CAMBIAR PAQUETES',
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
                    cardStyleInterpolator: forFade,
                }}   
            />
        </Stack.Navigator>
    );
}