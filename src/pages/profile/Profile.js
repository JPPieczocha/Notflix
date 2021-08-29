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
                    <Image style={styles.profileImage} source={require('../../../src/assets/images/dummy_profile/4.jpg')}></Image>
                    <Text style={styles.headerProfileText}>Martin Martins</Text>
                    <Text style={styles.headerPackageText}>Gold</Text>
                </View>

                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Modificar Perfil</Text>
                        <Ionicons name={'arrow-forward'} size={24} color={Colors.inactiveTint}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Seleccionar Paquete</Text>
                        <Ionicons name={'arrow-forward'} size={24} color={Colors.inactiveTint}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Modificar Perfil</Text>
                        <Ionicons name={'arrow-forward'} size={24} color={Colors.inactiveTint}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Modificar Perfil</Text>
                        <Ionicons name={'arrow-forward'} size={24} color={Colors.inactiveTint}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Modificar Perfil</Text>
                        <Ionicons name={'arrow-forward'} size={24} color={Colors.inactiveTint}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Modificar Perfil</Text>
                        <Ionicons name={'arrow-forward'} size={24} color={Colors.inactiveTint}/>
                    </TouchableOpacity>



                </ScrollView>
                <TouchableOpacity style={styles.buttonStyleLogOut}>
                        <Text style={styles.buttonTextogOut}>Cerrar Sesion</Text>
                </TouchableOpacity>
                <Text style={{color:'white', position:'absolute', bottom: 5}}>Version: 0.1 - Dev</Text>
            </View>
        </View>
    );
}