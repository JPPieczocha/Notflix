import React, { useState } from 'react';
import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './Styles'

export default function ChangePassword({navigation, route}) {

    const [oldPassword, setoldPassword] = useState("")
    const [newPassword, setnewPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.mainWrapper}>

                <TextInput 
                    placeholder = "Contraseña Anterior"
                    keyboardType = {"ascii-capable"}
                    onChangeText = {(text) => setoldPassword(text)}
                    style = {styles.input}
                />

                <TextInput 
                    placeholder = "Nueva Contraseña"
                    keyboardType = {"ascii-capable"}
                    onChangeText = {(text) => setnewPassword(text)}
                    style = {styles.input}
                />

                <TextInput 
                    placeholder = "Confirmar Contraseña"
                    keyboardType = {"ascii-capable"}
                    onChangeText = {(text) => setconfirmPassword(text)}
                    style = {styles.input}
                />

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