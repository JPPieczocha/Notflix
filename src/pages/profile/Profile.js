import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles'
import Colors from '../../constants/colors'

export default function Profile({}) {

    return (
        <View style={styles.container}>
            <View style={styles.mainWrapper}>

                <View style={styles.profileHeader}>
                    {/* Foto de perfil */}
                    <TouchableOpacity>
                        <Image style={styles.profileImage} source={require('../../../src/assets/images/dummy_profile/4.jpg')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.headerProfileText}>[Nombre] [Apellido]</Text>
                    <Text style={styles.packageProfileText}>Paquete [Nombre]</Text>
                </View>
                
                <View style={styles.buttonWrapper}>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>AJUSTES</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyleLogOut}>
                            <Text style={styles.buttonTextogOut}>CERRAR SESION</Text>
                    </TouchableOpacity>

                    <Text style={{color:'grey', position:'absolute', bottom: 5}}>Version: 0.1 - Dev</Text>
                
                </View>
                

            </View>
        </View>
    );
}