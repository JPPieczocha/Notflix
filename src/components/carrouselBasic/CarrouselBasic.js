import React from 'react';
import {FlatList,TouchableOpacity,Image,View, Animated, StyleSheet, ActivityIndicator } from 'react-native';
import styles from './Styles';

const CarrouselBasic = ({nav, route, movies})=>{

    const handleOnPress = (item)=>{
        nav.navigate('MovieFocus',{allData: item});
    }

    return(
        <Animated.FlatList
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={item => `${item.pos}`}

        // Se renderiza la pelicula
        renderItem={({index,item}) => {

            return(
                <TouchableOpacity
                onPress={()=>handleOnPress(item)}
                style={styles.buttonMovie}
                >
                    <View
                    style={[StyleSheet.absoluteFillObject,{
                        alignItems:'center',
                        overflow:'hidden',
                        justifyContent: 'center',
                    }]}>
                        <Image
                        source={{uri:item.movie.imageMobile}}
                        style={{
                            width: '100%',
                            height:'100%',
                            resizeMode:'contain',
                            backgroundColor:'red'
                        }}
                        onError={()=>console.log('Error al cargar la imagen del carrousel basic')}
                        onProgress={()=> { return <ActivityIndicator size={'small'} color={'white'}/>}}
                        >
                        </Image>
                    </View>
                </TouchableOpacity>
            )
        }}>
        </Animated.FlatList>
    )
}

export default CarrouselBasic

