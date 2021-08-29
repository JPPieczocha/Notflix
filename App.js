import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './src/constants/colors'
import Tabs from './src/navigation/Tabs'
import MovieFocus from './src/pages/movieFocus/MovieFocus';

export default function App() {

	const Stack = createNativeStackNavigator();
  	return (
		<NavigationContainer>
			<Stack.Navigator>
					<Stack.Screen name="Homee" component={Tabs} options={{headerShown:false}}/>
					<Stack.Screen name="MovieFocus" component={MovieFocus} options={{headerShown:false}}/>
			</Stack.Navigator>
		</NavigationContainer>
  	);
}