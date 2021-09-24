import React, { useState } from 'react';
import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './Styles'


export default function ChangePackage({navigation, route}) {
    

    return (
        <View style={styles.container}>
            <View style={styles.mainWrapper}>

                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.buttonText}>CONFIRMAR CAMBIO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonCancel} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>CANCELAR</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

}