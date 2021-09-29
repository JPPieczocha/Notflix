import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Styles';

import Paquete from '../../components/paquete/Paquete';
import {getAllPaquetes} from '../../controllers/PackagesController';


export default function ChangePackage({navigation, route}) {

    const [paquetes, setPaquetes] = useState();

    useEffect(() => {
        //Tomar el useEffect desde "landing".
        //Insertar ScrollView y mapear lo que llega del controlador

    }, [])
    
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