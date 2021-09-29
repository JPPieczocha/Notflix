import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking'

import styles from './Styles'
import { UserContext } from '../../components/context/authContext';


export default function Profile({navigation}) {

    const handleFacturacion = (value) =>{
        Linking.openURL(`http://facturacion-front.vercel.app/?from=mobile&token=${value.state.userToken}`)
    }

    return (
        <UserContext.Consumer>
            {value =>(
                <View style={styles.container}>
                    <View style={styles.mainWrapper}>
                        <View style={styles.profileHeader}>
                            {/* Foto de perfil */}
                            <TouchableOpacity>
                                <Image style={styles.profileImage} source={require('../../../src/assets/images/dummy_profile/4.jpg')}></Image>
                            </TouchableOpacity>
                            <Text style={styles.headerProfileText}>{value.state.userData.name + " " + value.state.userData.last_name}</Text>
                            <Text style={styles.packageProfileText}>ID (test): {value.state.userData._id}</Text>
                        </View>
                        
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Settings')}>
                                <Text style={styles.buttonText}>AJUSTES</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonStyle} onPress={() => handleFacturacion(value)}>
                                <Text style={styles.buttonText}>FACTURACIÓN</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonStyleLogOut} onPress={() => value.authContext.signOut()}>
                                    <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
                            </TouchableOpacity>

                            <Text style={{color:'grey', position:'absolute', bottom: 5}}>Version: 0.9 - Pre-Alpha</Text>
                        </View>
                    </View>
                </View>
            )}
        </UserContext.Consumer>
    );
}