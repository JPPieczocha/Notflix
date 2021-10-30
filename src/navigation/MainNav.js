import React from 'react';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

import Colors from '../constants/colors';
import NavSettings from './NavSettings';
import MovieFocus from '../pages/movieFocus/MovieFocus';
import MoviePlayer from '../pages/moviePlayer/MoviePlayer';
import Tabs from './Tabs';
import { UserContext } from '../components/context/authContext';
import MovieDetails from '../pages/movieDetails/MovieDetails';


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
                <Stack.Navigator >
                        <Stack.Screen name="Homee" component={Tabs} options={{headerShown:false, cardStyleInterpolator:forFade}}/>
                        <Stack.Screen name="MovieFocus" component={MovieFocus} options={{headerShown:false, cardStyleInterpolator:forFade}}/>
                        <Stack.Screen name="MoviePlayer" component={MoviePlayer} options={{headerShown:false, cardStyleInterpolator:forFade}}/>
                        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown:false, cardStyleInterpolator:forFade}}/>
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
                            headerShown:false,
                            cardStyleInterpolator: forFade,
                        }}/>
                </Stack.Navigator>
            )}
        </UserContext.Consumer>
    );
}