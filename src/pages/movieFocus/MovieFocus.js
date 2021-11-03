import React, {useState} from 'react';
import { Text, View, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator, Modal, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Colors from '../../constants/colors'
import styles from './Styles';

import { checkPlayMovie } from '../../controllers/PackagesController';
import { UserContext } from '../../components/context/authContext';

const MovieFocus = ({navigation,route})=>{

	const token = React.useContext(UserContext);
    const {allData} = route.params;

    const [loading, setLoading] = useState(false);

    const [modal, setModal] = useState(false)

    const handleMoviePlayer = async () => {
        setLoading(true)
        let movie = {
            id_contenido: allData.movie._id
        }
        let checked = await checkPlayMovie(token.state.userToken, movie);
        if(checked === 403){
            setModal(true);
        }else{
            navigation.navigate('MoviePlayer',{fileURL: allData.movie.movieUrl});
        }
        setLoading(false);
    }

    const header = ()=>{
        return(
            <View style={{height:120,justifyContent:'center', position:'absolute', top:0, left: 0, width:'100%', paddingLeft: 15, paddingTop: 40}}>
                <View
                style={{
                    width:50,
                    height:50,
                    backgroundColor: Colors.transparentWhite,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <TouchableOpacity onPress={()=>navigation.pop()}>
                        <Ionicons name={'arrow-back'} size={30} color={Colors.inactiveTint}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const ModalWarning =
    (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
            onRequestClose={() => setModal(false)} //Back de android
        >
            <View style={styles.modalFilter}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>No puedes ver "{allData.movie.title}"</Text>
                    <Text style={styles.description}>
                        Para ver este título, debes suscribirte a un paquete que pueda reproducir esta película.
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={() => setModal(false)}>
                        <Text style={styles.buttonText}>Volver</Text>
                    </TouchableOpacity>

                    <Image />
                </View>
            </View>
        </Modal>
    )

    return(
        <View style={{height:'100%', width:'100%', backgroundColor: Colors.primaryv3}}>
            <ImageBackground 
            resizeMode='stretch' 
            style={{
                height:'100%', 
                width:'100%',
                justifyContent:'flex-end'
            }} 
            source={{ uri: allData.movie.imageMobile }}
            >
                <BlurView  intensity={80} tint="dark" style={styles.main}>
                    <ScrollView
                    vertical
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    bouncesZoom={false}
                    style={{width:'100%'}}>
                        <View style={styles.mainHeader}>
                            <Text style={styles.titleText}>{allData.movie.title}</Text>
                            <View style={styles.movieData}>
                                <Text style={styles.movieDataText}>{allData.movie.minAge}</Text>
                                <Text style={styles.movieDataText}>{allData.movie.duration} Minutos</Text>
                                <Text style={styles.movieDataText}><Ionicons name={'star'} size={14} color={'gold'} style={{marginLeft:15}}/> {allData.movie.value}</Text>
                            </View>
                            <TouchableOpacity style={styles.playMovie} onPress={()=>handleMoviePlayer()} disabled={loading}>
                                { loading ? <ActivityIndicator size={'small'} color={Colors.white}/> : <Text style={styles.playMovieText}>Reproducir</Text>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sinopsis}>
                                <Text style={styles.sinopsisText}>{allData.movie.description}</Text>
                        </View>
                        <TouchableOpacity style={styles.details} onPress={()=>navigation.navigate('MovieDetails',{allData: allData})}>
                                <Text style={styles.playMovieText}>Más detalles</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </BlurView>
            </ImageBackground>
            {ModalWarning}
            {header()}
        </View>
    )
}

export default MovieFocus