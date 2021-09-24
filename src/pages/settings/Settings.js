import React from 'react';
import {Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './Styles'
import Colors from '../../constants/colors'
import {UserContext} from '../../components/context/authContext'

export default function Settings({navigation, route}) {

    return (
        <UserContext.Consumer>
            {value => (
                <View style={styles.container}>
                    <View style={styles.mainWrapper}>
                        <ScrollView style={styles.scrollView}>

                            <View style={[styles.headerOption, {borderTopWidth: 0}]}>
                                <Text style={styles.headerOptionText}>DETALLES DE LA CUENTA</Text>
                            </View>

                            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("ChangeMail")}>
                                <Text style={styles.opcionText}>Correo: {value.state.userData.email}</Text>
                                <Feather name="edit-2" size={24} color={Colors.secondary} style={styles.opcionIcon} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("ChangeContraseña")}>
                                <Text style={styles.opcionText} >Contraseña: ********</Text>
                                <Feather name="edit-2" size={24} color={Colors.secondary} style={styles.opcionIcon} />
                            </TouchableOpacity>

                            <View style={[styles.headerOption]}>
                                <Text style={styles.headerOptionText}>SUSCRIPCION</Text>
                            </View>

                            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("ChangePaquete")}>
                                <Text style={styles.opcionText}>Paquete Actual: Paquete [Nombre]</Text>
                                <Feather name="edit-2" size={24} color={Colors.secondary} style={styles.opcionIcon} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("ChangeTarjeta")}>
                                <Text style={styles.opcionText}>Tarjeta: ****-****-****-1234</Text>
                                <Feather name="edit-2" size={24} color={Colors.secondary} style={styles.opcionIcon} />
                            </TouchableOpacity>

                            <View style={[styles.headerOption]}>
                                <Text style={styles.headerOptionText}>LEGAL</Text>
                            </View>

                            <TouchableOpacity style={styles.optionButton}>
                                <Text style={styles.opcionText}>Condiciones de Uso</Text>
                                <Feather name="info" size={24} color={Colors.secondary} style={styles.opcionIcon}/>
                            </TouchableOpacity>
                            

                        </ScrollView>
                    </View>
                </View>
            )}
        </UserContext.Consumer>
    );
}