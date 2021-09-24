import React, { useState } from 'react';
import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './Styles'

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input-view";



export default function ChangeCreditCard({navigation, route}) {    

    const [creditCardData, setCreditCardData] = useState({})

    const handleCreditCard = () => console.log(creditCardData)

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
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <View style={[styles.mainWrapper, {justifyContent: 'flex-start'}]}>

                <View style={styles.creditCard}>
                    <CreditCardInput requiresName={true} onChange={setCreditCardData}/>
                </View>
                
                <TouchableOpacity style={[styles.boton, {bottom: 2}]} onPress={handleCreditCard}>
                    <Text style={styles.buttonText}>CONFIRMAR CAMBIO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botonCancel, {bottom: 2}]} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>CANCELAR</Text>
                </TouchableOpacity>


            </View>
        </View>
    );

}