import React, {useContext} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles'
import Colors from '../../constants/colors';
import { UserContext } from '../../components/context/authContext';

import * as Linking from 'expo-linking'

export default function Profile({navigation}) {

    const handleFacturacion = () =>{
        Linking.openURL('http://facturacion-front.vercel.app/?from=mobile&token=?') //AGREGAR TOKEN
    }

    return (
        <UserContext.Consumer>
            {value =>(
                <View style={styles.container}>
                    {/* {console.log(value)} */}
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

                            <TouchableOpacity style={styles.buttonStyle} onPress={() => handleFacturacion()}>
                                <Text style={styles.buttonText}>FACTURACION</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonStyleLogOut} onPress={() => value.authContext.signOut()}>
                                    <Text style={styles.buttonText}>CERRAR SESION</Text>
                            </TouchableOpacity>

                            <Text style={{color:'grey', position:'absolute', bottom: 5}}>Version: 0.85 - Dev</Text>
                        </View>
                    </View>
                </View>
            )}
        </UserContext.Consumer>
    );
}