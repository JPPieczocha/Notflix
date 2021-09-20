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


	//-----------------------PRUEBA NO TOCAR--------------------------------------------

	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isloading: false,
					};
				case 'SIGN_IN':
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
					};
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignout: true,
						userToken: null,
					};
			}
		},
		{
			isloading: true,
			isSignout: false,
			userToken: null,
		}
	);
	

	useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken;
		
			try {
				userToken = await SecureStore.getItemAsync('userToken');
			} catch (e) {
				// Restoring token failed
			}
		
			// After restoring token, we may need to validate it in production apps
		
			// This will switch to the App screen or Auth screen and this loading
			// screen will be unmounted and thrown away.
			dispatch({ type: 'RESTORE_TOKEN', token: userToken });
		};
		bootstrapAsync();
	}, []);

	const authContext = useMemo(() => ({
		signIn: async data => {
			// In a production app, we need to send some data (usually username, password) to server and get a token
			// We will also need to handle errors if sign in failed
			// After getting token, we need to persist the token using `SecureStore`
			// In the example, we'll use a dummy token
			dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
		},
		signOut: () => dispatch({ type: 'SIGN_OUT' }),
		signUp: async data => {
			// In a production app, we need to send user data to server and get a token
			// We will also need to handle errors if sign up failed
			// After getting token, we need to persist the token using `SecureStore`
			// In the example, we'll use a dummy token
	
			dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
		},
		}),
		[]
	);


	//-------------------FIN PRUEBA NO TOCAR--------------------------------------------

	// useEffect(() => {

	// 	const getTokenAsync = async () =>{
	// 		//Solo si la sesión ya se encuentra iniciada.
	// 		let userToken;
	// 		try{
	// 			userToken = await SecureStore.getItemAsync('userToken');
	// 		}catch (e){
 	// 			// Restoring token failed
	// 			 console.log('Dentro de carch: '+e);
	// 		}
	// 		if(userToken === null){ //cambiar a ver si está iniciada la sesión
	// 			setUserData({nombre: 'Brian', apellido: 'Rodriguez', mail:'nm@gmail.com', id: 1})
	// 			setLogueado(!logueado)
	// 			setisLoading(!isLoading)
	// 		}else{
	// 			setUserData({nombre: 'Brian', apellido: 'Rodriguez', mail:'nm@gmail.com',id: 1})
	// 			setisLoading(!isLoading)
	// 		}
	// 	}
	// 	// After restoring token, we may need to validate it in production apps

    //  	// This will switch to the App screen or Auth screen and this loading
    //   	// screen will be unmounted and thrown away.
	// 	  getTokenAsync()
	// }, [])

	//Lo de arriba funciona bien. No es de prueba.


	const Stack = createNativeStackNavigator();
	
	return (
		<NavigationContainer>
			<UserContext.Provider value={authContext}>
			<Stack.Navigator>
				{state.isloading ? <Stack.Screen name="Loading" component={LoadingPage} options={{headerShown:false}}/> : null}
					{state.userToken == null ? 
					// {!logueado ? 
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