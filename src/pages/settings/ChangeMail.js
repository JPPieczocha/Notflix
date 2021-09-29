import React, { useState } from 'react';
import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './Styles'

export default function ChangeMail({navigation, route}) {

    const [newMail, setnewMail] = useState("")
    const [confirmMail, setconfirmMail] = useState("")
    const [password, setPassword] = useState("")
    

    return (
        <View style={styles.container}>
            <View style={styles.mainWrapper}>
                
                <TextInput 
                    placeholder = "Correo nuevo"
                    keyboardType = {"email-address"}
                    onChangeText = {(text) => setnewMail(text)}
                    style = {styles.input}
                />

                <TextInput 
                    placeholder = "Confirmar correo"
                    keyboardType = {"email-address"}
                    onChangeText = {(text) => setconfirmMail(text)}
                    style = {styles.input}
                />

                <TextInput 
                    placeholder = "Contraseña"
                    keyboardType = {"default"}
                    secureTextEntry={true}
                    onChangeText = {(text) => setPassword(text)}
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