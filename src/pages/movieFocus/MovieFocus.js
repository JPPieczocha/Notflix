import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Colors from '../../constants/colors'
import styles from './Styles';

const MovieFocus = ({navigation,route})=>{

    const {title, idMovie, imageSource,ratings,genre,age, desc} = route.params;
    //Falta el loading al cargar la pelicula, más adelante

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

    return(
        <View style={{height:'100%', width:'100%'}}>
            {/* <Text>HOLA</Text> */}
            <ImageBackground 
            resizeMode='stretch' 
            style={{
                height:'100%', 
                width:'100%',
                justifyContent:'flex-end'
            }} 
            source={require("../../assets/images/images/series/money_heist/money_heist_cover.jpg")}>
                <BlurView  intensity={80} tint="dark" style={styles.main}>
                    <ScrollView
                    vertical
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    bouncesZoom={false}
                    style={{width:'100%'}}>
                        {/* Pongo Scroll view por si la pantalla es más chiquita */}
                        <View style={styles.mainHeader}>
                            <Text style={styles.titleText}>{title}</Text>
                            <View style={styles.movieData}>
                                <Text style={styles.movieDataText}>{age}</Text>
                                <Text style={styles.movieDataText}>{genre}</Text>
                                <Text style={styles.movieDataText}>{ratings}/10</Text>
                            </View>
                            <TouchableOpacity style={styles.playMovie} onPress={()=>navigation.navigate('MoviePlayer',{title:title})}>
                                <Text style={styles.playMovieText}>Reproducir</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sinopsis}>
                                <Text style={styles.sinopsisText}>{desc}</Text>
                        </View>
                        <TouchableOpacity style={styles.details}>
                                <Text style={styles.playMovieText}>Más detalles</Text>
                        </TouchableOpacity>

                        {/* <View style={{width:'100%', justifyContent:'center', alignItems:"center"}}>
                            <TouchableOpacity style={styles.playMovie} onPress={()=>navigation.navigate('MoviePlayer',{title:title})}>
                                <Text style={styles.playMovieText}>Reproducir</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.details}>
                                <Text style={styles.playMovieText}>Más detalles</Text>
                            </TouchableOpacity>
                        </View> */}
                    </ScrollView>
                </BlurView>


            </ImageBackground>
            {header()}
            

        </View>
    )
}

export default MovieFocus