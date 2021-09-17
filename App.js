import { StatusBar } from 'expo-status-bar';
import React, {useState, createContext, useMemo, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './src/constants/colors'
import NavLogSign from './src/navigation/NavLogSign';
import MainNav from './src/navigation/MainNav';
import LoadingPage from './src/components/loadingPage/LoadingPage';
import * as SecureStore from 'expo-secure-store';
import { UserContext } from './src/components/context/authContext';

export default function App() {

	const [userData, setUserData] = useState({});
	const [isLoading, setisLoading] = useState(true)
	const [logueado, setLogueado] = useState(false)
	//lo de arriba (logueado) se va, es un dummy, demostrará si me en cuentro logueado o no a la hora de qué pantallas mostrar

	useEffect(() => {

		const getTokenAsync = async () =>{
			//Solo si la sesión ya se encuentra iniciada.
			let userToken;
			try{
				userToken = await SecureStore.getItemAsync('userToken');
			}catch (e){
 				// Restoring token failed
				 console.log('Dentro de carch: '+e);
			}
			if(userToken === null){ //cambiar a ver si está iniciada la sesión
				setUserData({nombre: 'Brian', apellido: 'Rodriguez', mail:'nm@gmail.com', id: 1})
				setLogueado(!logueado)
				setisLoading(!isLoading)
			}else{
				setUserData({nombre: 'Brian', apellido: 'Rodriguez', mail:'nm@gmail.com',id: 1})
				setisLoading(!isLoading)
			}
		}
		// After restoring token, we may need to validate it in production apps

     	// This will switch to the App screen or Auth screen and this loading
      	// screen will be unmounted and thrown away.
		  getTokenAsync()
	}, [])


	const Stack = createNativeStackNavigator();
	
	return (
		<NavigationContainer>
			<UserContext.Provider value={userData}>
			<Stack.Navigator>
				{isLoading ? <Stack.Screen name="Loading" component={LoadingPage} options={{headerShown:false}}/> : null}
					{!logueado ? 
						// <Stack.Screen name="SignLogin" component={LoadingPage} options={{headerShown:false}}/> 
						<Stack.Screen name="SignLogin" component={NavLogSign} options={{headerShown:false}}/> 
						: 
						<Stack.Screen name="MainNavigator" component={MainNav} options={{headerShown:false}}/>
					}
			</Stack.Navigator>
			</UserContext.Provider>
		</NavigationContainer>
	);
}