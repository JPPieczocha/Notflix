import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../constants/colors';
import NavSettings from './NavSettings';
import MovieFocus from '../pages/movieFocus/MovieFocus';
import MoviePlayer from '../pages/moviePlayer/MoviePlayer';
import Tabs from './Tabs';
import { UserContext } from '../components/context/authContext';
import MovieDetails from '../pages/movieDetails/MovieDetails';


export default function MainNav({navigation}){

    const Stack = createNativeStackNavigator();

    // El navigation container está abstraido en el App.js
    return(
        <UserContext.Consumer>
            {value => (
                <Stack.Navigator>
                        <Stack.Screen name="Homee" component={Tabs} options={{headerShown:false}}/>
                        <Stack.Screen name="MovieFocus" component={MovieFocus} options={{headerShown:false}}/>
                        <Stack.Screen name="MoviePlayer" component={MoviePlayer} options={{headerShown:false}}/>
                        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown:false}}/>
                        <Stack.Screen name="Settings" component={NavSettings} options={{
                            title: 'Ajustes',
                            headerStyle:{
                                backgroundColor: Colors.primaryv3,
                            },
                            headerShadowVisible:false,
                            headerBackTitle:'Perfil',
                            headerTintColor: Colors.inactiveTint,
                            headerTitleAlign:'center',
                            headerTitleStyle:{
                                color: Colors.inactiveTint,
                                fontSize: 20,
                            },
                            headerShown:false
                        }}/>
                </Stack.Navigator>
            )}
        </UserContext.Consumer>
    );
}