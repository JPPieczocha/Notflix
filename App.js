import { StatusBar } from 'expo-status-bar';
import React, {useState, createContext, useMemo, useEffect} from 'react';
import JWT from 'expo-jwt';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';

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
		
			try {
				userToken = await SecureStore.getItemAsync('userToken');
				if(userToken !== null){
					user = JWT.decode(userToken,'$2a$08$sxsFC91y2xGJxlq.ZZZHEO');
				}
			} catch (e) {
				// Restoring token failed
				console.log('ERRRRRO');
				console.log(e);
			}
			// After restoring token, we may need to validate it in production apps
			// This will switch to the App screen or Auth screen and this loading
			// screen will be unmounted and thrown away.
			dispatch({ type: 'RESTORE_TOKEN', token: userToken, userdata: user});
		};
		bootstrapAsync();

	}, []);

	const authContext = useMemo(() => ({
		signIn: async data => {
			let userData = {
				email: data.emailLOGIN,
				password: data.passwordLOGIN,
				tenant: 'mobile'
			}
			let user;
			try{
				const iniciarSesion = await login(userData);
				const saveKeyStore =  await SecureStore.setItemAsync('userToken', iniciarSesion.token);
				user = JWT.decode(iniciarSesion.token, '$2a$08$sxsFC91y2xGJxlq.ZZZHEO');
				dispatch({ type: 'SIGN_IN', token: iniciarSesion.token, userdata: user});
			}catch (e){
				console.log('ERROR EN useMeMO SignIN');
				console.log(e);
			}
		},
		signOut: async() => {
			const deleteKeyStore = await SecureStore.deleteItemAsync('userToken')
			dispatch({ type: 'SIGN_OUT' });
		},
		signUp: async data => {
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
				const auxUser = {
					email: registrarse.user.email,
					password: data.password,
					tenant: 'mobile'
				}
				const iniciarSesion = await login(auxUser);
				const saveKeyStore =  await SecureStore.setItemAsync('userToken', iniciarSesion.token);

				//TODO: Manejo de controles y fail de inicio / registro
				user = JWT.decode(iniciarSesion.token, '$2a$08$sxsFC91y2xGJxlq.ZZZHEO');
				dispatch({ type: 'SIGN_IN', token: iniciarSesion.token, userdata: user });
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