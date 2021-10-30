import React from 'react';
import {Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Linking from 'expo-linking'

import styles from './Styles'
import { UserContext } from '../../components/context/authContext';
import Colors from '../../constants/colors';


export default function Profile({navigation}) {

    const handleFacturacion = (value) =>{
        console.log(value.state.userToken);
        Linking.openURL(`https://fya-develop.vercel.app/?from=mobile&token=${value.state.userToken}`)
    }

    return (
        <UserContext.Consumer>
            {value =>(
                <View style={styles.container}>
                    <View style={styles.mainWrapper}>
                        <View style={styles.profileHeader}>
                            <View style={styles.profileImage}>
                                <Text style={{fontSize: 40, color: Colors.white}}>{value.state.userData.name[0]}{value.state.userData.last_name[0]}</Text>
                            </View>
                            <Text style={styles.headerProfileText}>{value.state.userData.name + " " + value.state.userData.last_name}</Text>
                        </View>
                        
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Settings')}>
                                <Text style={styles.buttonText}>AJUSTES</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonStyle} onPress={() => handleFacturacion(value)}>
                                <Text style={styles.buttonText}>AUTOGESTIÓN</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonStyleLogOut} onPress={() => value.authContext.signOut()}>
                                    <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
                            </TouchableOpacity>

                            <Text style={{color:'grey', position:'absolute', bottom: 5}}>Version: 0.95 - Beta</Text>
                        </View>
                    </View>
                </View>
            )}
        </UserContext.Consumer>
    );
}