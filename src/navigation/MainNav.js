import React from 'react';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

import Colors from '../constants/colors';
import NavSettings from './NavSettings';
import MovieFocus from '../pages/movieFocus/MovieFocus';
import MoviePlayer from '../pages/moviePlayer/MoviePlayer';
import Tabs from './Tabs';
import { UserContext } from '../components/context/authContext';
import MovieDetails from '../pages/movieDetails/MovieDetails';


import Settings from '../pages/settings/Settings';
import ChangeMail from '../pages/settings/ChangeMail';
import ChangePassword from '../pages/settings/ChangePassword';
import ChangeCreditCard from '../pages/settings/ChangeCreditCard';
import ChangePackage from '../pages/settings/ChangePackage';


export default function MainNav({navigation}){

    const Stack = createStackNavigator();

      const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
});
    // El navigation container está abstraido en el App.js
    return(
        <UserContext.Consumer>
            {value => (
                <Stack.Navigator>
                        <Stack.Screen name="Homee" component={Tabs} options={{headerShown:false}}/>
                        <Stack.Screen name="MovieFocus" component={MovieFocus} options={{headerShown:false}}/>
                        <Stack.Screen name="MoviePlayer" component={MoviePlayer} options={{headerShown:false}}/>
                        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown:false}}/>
                        {/* <Stack.Screen name="Settings" component={NavSettings} options={{
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
                        }}/> */}

                        {/* Profile V2 */}

                    <Stack.Screen
                        name="ChangeMail"
                        component={ChangeMail}
                        options={{
                            title: 'Cambiar Correo',
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
                        }}   
                    />

                    <Stack.Screen
                        name="ChangeContraseña"
                        component={ChangePassword}
                        options={{
                            title: 'Cambiar Contraseña',
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
                        }}   
                    />

                    <Stack.Screen
                        name="ChangePaquete"
                        component={ChangePackage}
                        options={{
                            title: 'Cambiar Paquetes',
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
                        }}   
                    />
                </Stack.Navigator>
            )}
        </UserContext.Consumer>
    );
}