import React, { useState } from 'react';
import {Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import styles from './Styles'

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input-view";

import Colors from '../../constants/colors'

export default function ChangeCreditCard({navigation, route}) {    

    const [creditCardData, setCreditCardData] = useState({})

    const handleCreditCard = () => {
        console.log(creditCardData)

        //TODO: Acá faltaría el manejo intermedio. Es decir, actualizar en la app y en el storage, el cambio de tarjeta
        //2do Sprint

        navigation.pop()
    }

    const handleKeyboard = ()=>{
        if(Keyboard.addListener('keyboardDidShow')){
            Keyboard.dismiss()
        }
    }

    // will print:
    // {
    // valid: true, // will be true once all fields are "valid" (time to enable the submit button)
    // values: { // will be in the sanitized and formatted form
    //     number: "4242 4242",
    //     expiry: "06/19",
    //     cvc: "300",
    //     type: "visa", // will be one of [null, "visa", "master-card", "american-express", "diners-club", "discover", "jcb", "unionpay", "maestro"]
    //     name: "Sam",
    //     postalCode: "34567",
    // },
    // status: {  // will be one of ["incomplete", "invalid", and "valid"]
    //     number: "incomplete",
    //     expiry: "incomplete",
    //     cvc: "incomplete",
    //     name: "incomplete", 
    //     postalCode: "incomplete",
    // },
    // };

    // Notes: 
    // cvc, name, & postalCode will only be available when the respective props is enabled (e.g. requiresName, requiresCVC)

    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]} onTouchStart={()=>handleKeyboard()}>
            <View style={[styles.mainWrapper, {justifyContent: 'flex-start'}]}>

                <View style={styles.creditCard}>
                    <CreditCardInput
                        requiresName={true}
                        allowScroll={true}
                        cardScale={0.75}
                        allowScroll
                        labels={{name: 'NOMBRE COMPLETO', number: 'NÚMERO TARJETA', expiry: 'EXPIRA', cvc: 'CCV'}}
                        placeholders= {{name: 'NOMBRE COMPLETO', number: 'NÚMERO TARJETA', expiry: 'EXPIRA', cvc: 'CCV'}}
                        inputContainerStyle = {{borderBottomWidth: 1, borderBottomColor: Colors.inactiveTint}}
                        
                        labelStyle={{color: Colors.inactiveTint}}
                        inputStyle={{color: Colors.inactiveTint}}

                        onChange={setCreditCardData}
                    />

                    <TouchableOpacity style={[styles.boton, {alignSelf: 'center'}]} onPress={()=>handleCreditCard()}>
                        <Text style={styles.buttonText}>ACTUALIZAR TARJETA</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );

}