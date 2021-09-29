import React from 'react'
import { View, Text} from 'react-native';
import styles from './Styles'

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