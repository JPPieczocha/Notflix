import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import NavSettings from './NavSettings';
import MovieFocus from '../pages/movieFocus/MovieFocus';
import VideoPlayer from '../pages/videoPlayer/VideoPlayer';
import MoviePlayer from '../pages/moviePlayer/MoviePlayer';
import Tabs from './Tabs';


export default function MainNav({navigation}){

    const Stack = createNativeStackNavigator();
    // El navigation container está abstraido en el App.js

    return(
        <Stack.Navigator>
            <Stack.Screen name="Homee" component={Tabs} options={{headerShown:false}}/>

            <Stack.Screen name="MovieFocus" component={MovieFocus} options={{headerShown:false}}/>
            
            <Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{headerShown:false}}/>
            
            <Stack.Screen name="MoviePlayer" component={MoviePlayer} options={{headerShown:false}}/>
            
            <Stack.Screen name="Settings" component={NavSettings} options={{
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
            }}/>
            
        </Stack.Navigator>
    );
}