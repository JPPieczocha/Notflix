import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Styles';

import LoadingPage from '../../components/loadingPage/LoadingPage';
import Paquete from '../../components/paquete/Paquete';
import {getAllPaquetes} from '../../controllers/PackagesController';

import { UserContext } from '../../components/context/authContext';
import { FlatList } from 'react-native-gesture-handler';



export default function ChangePackage({navigation, route}) {

    const [paquetes, setPaquetes] = useState();
	const token = React.useContext(UserContext);

    useEffect(() => {
        try{
            const paquetesData = async ()=>{
                let data = await getAllPaquetes();
                if(data != undefined){
                    setPaquetes(data.data);
                }
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
                        <FlatList
                        data={paquetes}
                        style={{width: '95%'}}
                        contentContainerStyle={{width: '100%'}}
                        keyExtractor={item => `${item.id_paquete}`}
                        renderItem={(item)=> { 
                            return (<TouchableOpacity onPress={()=> console.log(item.item)} style={{width: '100%'}}>
                                <Paquete key={item.item.id_paquete} id={item.item.id_paquete} nombre={item.item.nombre} precio={item.item.precio} imagen={item.item.imagen} estado={item.item.estado} descripcion={item.item.descripcion} contenidos={item.item.descripcion}></Paquete>
                                </TouchableOpacity>
                            )}}
                        />

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