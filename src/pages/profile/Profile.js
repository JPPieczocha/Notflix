import React, {useContext} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles'
import Colors from '../../constants/colors';
import { UserContext } from '../../components/context/authContext';

export default function Profile({navigation, route}) {

    const {value} = route.params;

    const {signOut} = useContext(UserContext);


    const handleFacturacion = () =>{
        console.log(UserContext);
        console.log("FACTURACION-------------")
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainWrapper}>

                <View style={styles.profileHeader}>
                    {/* Foto de perfil */}
                    <TouchableOpacity>
                        <Image style={styles.profileImage} source={require('../../../src/assets/images/dummy_profile/4.jpg')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.headerProfileText}>{value.nombre + " " + value.apellido}</Text>
                    <Text style={styles.packageProfileText}>Paquete [Nombre]</Text>
                </View>
                
                <View style={styles.buttonWrapper}>
                    
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Settings')}>
                        <Text style={styles.buttonText}>AJUSTES</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle} onPress={() => handleFacturacion()}>
                        <Text style={styles.buttonText}>FACTURACION</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyleLogOut} onPress={() => signOut()}>
                            <Text style={styles.buttonText}>CERRAR SESION</Text>
                    </TouchableOpacity>

                    <Text style={{color:'grey', position:'absolute', bottom: 5}}>Version: 0.85 - Dev</Text>
                
                </View>
                

            </View>
        </View>
    );
}