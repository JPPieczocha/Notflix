import React , { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles'

const Paquete = ({id,nombre,precio,imagen,estado,descripcion, contenidos,fechaAct, fechaCreacion, selected, handleAddPackage})=>{

    const [selection, setSelection] = useState(false)

    const handleSelection = () => {
        handleAddPackage(id, precio)
        setSelection(!selection)
    }

    return(
        <TouchableOpacity onPress={() => handleSelection()}>
            <View style={!selection ? styles.container: styles.containerSelected}>
                <View style={styles.infoWrapper}>
                    <Text style={styles.nombre}>{nombre}</Text>
                    <Text style={styles.descripcion}>{descripcion}</Text>
                </View>
                <View style={styles.precioWrapper}>
                    <Text style={styles.precio}>${precio}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Paquete