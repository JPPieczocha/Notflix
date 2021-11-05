import { StatusBar } from 'expo-status-bar';
import React, {useState, createContext, useMemo, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import jwt_decode from "jwt-decode";

import MainNav from './src/navigation/MainNav';
import LoadingPage from './src/components/loadingPage/LoadingPage';
import { UserContext } from './src/components/context/authContext';
import { login, registro } from './src/controllers/UsersController';
import Landing from './src/pages/landing/Landing';

export default function App() {


	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isloading: false,
						userData: action.userdata
					};
				case 'SIGN_IN':
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
						userData: action.userdata						
					};
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignout: true,
						userToken: null,
						userData: null,
						//Abajo nuevo agregado
						isloading: false,
					};
			}
		},
		{
			isloading: true,
			isSignout: false,
			userToken: null,
			userData: null
		}
	);
	

	useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken;
			let user;
			let todayDate = new Date();

			try {
				userToken = await SecureStore.getItemAsync('userToken');
				if(userToken !== null){
					user = jwt_decode(userToken);
					if(user.exp*100 < todayDate.getTime()){
						console.log('Token vencido');
						const deleteKeyStore = await SecureStore.deleteItemAsync('userToken');
						dispatch({ type: 'SIGN_OUT'});
					}else{
						// After restoring token, we may need to validate it in production apps
						// This will switch to the App screen or Auth screen and this loading
						// screen will be unmounted and thrown away.
						console.log('Token restaurado. No se encuentra vencido');
						dispatch({ type: 'RESTORE_TOKEN', token: userToken, userdata: user});
					}
				}else{
					dispatch({ type: 'SIGN_OUT'});
					console.log('Token no encontrado');
				}
			} catch (e) {
				// Restoring token failed
				console.log('Error en userToken / JWT');
				console.log(e);
				if(user === undefined){
					console.log('CREDENCIALES VENCIDAS, CERRANDO SESION...');
					const deleteKeyStore = await SecureStore.deleteItemAsync('userToken')
					dispatch({ type: 'SIGN_OUT'});
				}
			}
		};
		bootstrapAsync();

	}, []);

	const authContext = useMemo(() => ({
		signIn: async data => {
			let userData = {
				email: data.emailString,
				password: data.passString,
				tenant: 'mobile'
			}
			let user;
			try{
				const iniciarSesion = await login(userData);
				if(iniciarSesion === 401){
					return iniciarSesion;
				}
				const saveKeyStore =  await SecureStore.setItemAsync('userToken', iniciarSesion.token);
				user = jwt_decode(iniciarSesion.token);
				user.token = iniciarSesion.token;
				let decodedHeader = jwt_decode(iniciarSesion.token, { header: true });

				dispatch({ type: 'SIGN_IN', token: iniciarSesion.token, userdata: user});
			}catch (e){
				console.log('ERROR EN useMeMO SignIN');
				console.log(e);
			}
		},
		signOut: async() => {
			const deleteKeyStore = await SecureStore.deleteItemAsync('userToken');
			dispatch({ type: 'SIGN_OUT' });
		},
		signUp: async data => {

			//DEPRECATED SIGNUP
			let user;

			let registerData = {
				email: data.email,
				password: data.password,
				name: data.name,
				last_name: data.surname,
				admin:false,
				tenant: 'mobile'
			}
			try{
				const registrarse = await registro(registerData);
				console.log('FROM REGISTRO');
				console.log(registrarse);
				return registrarse;
			}catch (e){
				console.log('ERROR EN CREAR USUARIO. USEMEMO');
			}
		}
		}),
		[]
	);

	const Stack = createNativeStackNavigator();
	
	return (
		<NavigationContainer>
			<UserContext.Provider value={{authContext, state}}>
			<Stack.Navigator>
				{state.isloading ? <Stack.Screen name="Loading" component={LoadingPage} options={{headerShown:false}}/> : null}
					{state.userToken === null ? 
						<Stack.Screen name="SignLogin" component={Landing} options={{headerShown:false}}/>
						: 
						<Stack.Screen name="MainNavigator" component={MainNav} options={{headerShown:false}}/>
					}
			</Stack.Navigator>
			</UserContext.Provider>
		</NavigationContainer>
	);
}