import React from 'react';
import {Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import * as Linking from 'expo-linking'

import { Feather } from '@expo/vector-icons';


import styles from './Styles'
import { UserContext } from '../../components/context/authContext';
import Colors from '../../constants/colors';


export default function Profile({navigation}) {

    const handleFacturacion = (value) =>{
        console.log(value.state.userToken);
        Linking.openURL(`https://fya-develop.vercel.app/?from=mobile&token=${value.state.userToken}`)
    }

    const redirectLegal = () => {
        Linking.openURL('https://www.termsfeed.com/public/uploads/2019/04/terms-and-conditions-template.pdf')
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

                        {/* DESDE ACÄ NUEVO */}

                        <View style={styles.mainContentWrapper}>
                            <ScrollView bounces={false} style={styles.scrollView} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>

                                <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("ChangeMail")}>
                                    <Text style={styles.opcionText}>Correo: {value.state.userData.email}</Text>
                                    <Feather name="edit-2" size={24} color={Colors.secondary} style={styles.opcionIcon} />
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("ChangeContraseña")}>
                                    <Text style={styles.opcionText}>Cambiar Contraseña</Text>
                                    <Feather name="edit-2" size={24} color={Colors.secondary} style={styles.opcionIcon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("ChangePaquete")}>
                                    <Text style={styles.opcionText}>Cambiar Paquete</Text>
                                    <Feather name="edit-2" size={24} color={Colors.secondary} style={styles.opcionIcon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.optionButton} onPress={()=>redirectLegal()}>
                                    <Text style={styles.opcionText}>Términos y Condiciones de Uso</Text>
                                    <Feather name="info" size={24} color={Colors.secondary} style={styles.opcionIcon}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonStyle} onPress={() => handleFacturacion(value)}>
                                    <Text style={styles.buttonText}>AUTOGESTIÓN</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonStyleLogOut} onPress={() => value.authContext.signOut()}>
                                    <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
                                </TouchableOpacity>
                                
                            </ScrollView>
                        </View>

                        {/* HASTA ACÄ NUEVO */}

                        
                        {/* <View style={styles.buttonWrapper}>
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
                        </View> */}
                    </View>
                </View>
            )}
        </UserContext.Consumer>
    );
}