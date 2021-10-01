import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Styles';

import LoadingPage from '../../components/loadingPage/LoadingPage';
import Paquete from '../../components/paquete/Paquete';
import {getAllPaquetes} from '../../controllers/PackagesController';


export default function ChangePackage({navigation, route}) {

    const [paquetes, setPaquetes] = useState();

    useEffect(() => {
        try{
            const paquetesData = async ()=>{
                let data = await getAllPaquetes();
                setPaquetes(data.data);
            }
            paquetesData();
        }catch (e){
            console.log("Error al adquirir paquetes");
        }

    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.mainWrapper}>
                <View style={{width:'100%', maxHeight:'100%', justifyContent:'center', alignItems:'center'}}>
                    {paquetes === undefined ? <LoadingPage/> : 
                        <ScrollView style={{width:'100%', maxHeight:'60%', marginBottom:25}} contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
                            {paquetes.map((item,index)=>{
                                    return(
                                        <Paquete key={index} id={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} estado={item.estado} descripcion={item.descripcion} contenidos={item.descripcion}></Paquete>
                                    )
                            })}
                        </ScrollView>
                    }
                
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.buttonText}>CONFIRMAR CAMBIO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonCancel} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>CANCELAR</Text>
                </TouchableOpacity>
                </View>

            </View>
        </View>
    );

}