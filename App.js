import { StatusBar } from 'expo-status-bar';
import React, {useState, createContext, useMemo} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './src/constants/colors'
import Tabs from './src/navigation/Tabs'
import MovieFocus from './src/pages/movieFocus/MovieFocus';
import VideoPlayer from './src/pages/videoPlayer/VideoPlayer';
import MoviePlayer from './src/pages/moviePlayer/MoviePlayer'
import NavLogSign from './src/navigation/NavLogSign';
import MainNav from './src/navigation/MainNav';


const AuthContext = createContext();



export default function App() {

	const [isLoading, setisLoading] = useState(true)
	const [logueado, setLogueado] = useState(false)
	//lo de arriba (logueado) se va, es un dummy, demostrará si me en cuentro logueado o no a la hora de qué pantallas mostrar

	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator>
					{logueado ? 
						<Stack.Screen name="SignLogin" component={NavLogSign} options={{headerShown:false}}/> 
						: 
						<Stack.Screen name="MainNavigator" component={MainNav} options={{headerShown:false}}/>
					}
					{/* <Stack.Screen name="Homee" component={Tabs} options={{headerShown:false}}/>
					<Stack.Screen name="MovieFocus" component={MovieFocus} options={{headerShown:false}}/>
					<Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{headerShown:false}}/>
					<Stack.Screen name="MoviePlayer" component={MoviePlayer} options={{headerShown:false}}/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}