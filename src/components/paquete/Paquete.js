import React, {useState, useRef, useContext, useEffect} from 'react'
import { View, Text, ImageBackground,Platform, TouchableOpacity, Image, Animated, Dimensions, TextInput,Keyboard, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from './Styles'
import Colors from '../../constants/colors';

const Paquete = ({id,nombre,precio,imagen,estado,descripcion, contenidos,fechaAct, fechaCreacion})=>{
    return(
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Text style={styles.nombre}>{nombre}</Text>
                <Text style={styles.descripcion}>{descripcion}</Text>
            </View>
            <View style={styles.precioWrapper}>
                <Text style={styles.precio}>${precio}</Text>
            </View>
        </View>
    )
}

export default Paquete