import { StatusBar } from 'expo-status-bar';
import React, {useState, createContext, useMemo, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JWT from 'expo-jwt';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './src/constants/colors'
import NavLogSign from './src/navigation/NavLogSign';
import MainNav from './src/navigation/MainNav';
import LoadingPage from './src/components/loadingPage/LoadingPage';
import * as SecureStore from 'expo-secure-store';
import { UserContext } from './src/components/context/authContext';
import { login, registro } from './src/controllers/UsersController';

export default function App() {

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

			//DATA VA A TENER: MAIL Y CONTRASEÑA
			let userData = {
				email: data.emailLOGIN,
				password: data.passwordLOGIN,
				tenant: 'mobile'
			}

			try{
				const iniciarSesion = await login(userData);
				const saveKeyStore =  await SecureStore.setItemAsync('userToken', iniciarSesion.token);
				console.log(JWT.decode(iniciarSesion.token,'$2a$08$sxsFC91y2xGJxlq.ZZZHEO'));
				dispatch({ type: 'SIGN_IN', token: iniciarSesion.token });

			}catch (e){
				console.log('ERROR EN useMeMO SignIN');
				console.log(e);
			}

			// In a production app, we need to send some data (usually username, password) to server and get a token
			// We will also need to handle errors if sign in failed
			// After getting token, we need to persist the token using `SecureStore`
			// In the example, we'll use a dummy token
		},
		signOut: async() => {
			const deleteKeyStore = await SecureStore.deleteItemAsync('userToken')
			dispatch({ type: 'SIGN_OUT' });
		},
		signUp: async data => {

			let registerData = {
				email: data.email,
				password: data.password,
				name: data.name,
				last_name: data.surname,
				admin:false,
				tenant: 'mobile'
			}

			//NO PROBAR TODAVIA

			try{
				const registrarse = await registro(registerData);
				const saveKeyStore =  await SecureStore.setItemAsync('userToken', registrarse.token);
				dispatch({ type: 'SIGN_IN', token: registrarse.token });
			}catch (e){
				console.log('ERROR EN CREAR USUARIO. USEMEMO');
			}
			
			// In a production app, we need to send user data to server and get a token
			// We will also need to handle errors if sign up failed
			// After getting token, we need to persist the token using `SecureStore`
			// In the example, we'll use a dummy token
	
		},
		}),
		[]
	);

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