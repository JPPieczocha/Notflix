import React from 'react';
import {SafeAreaView,FlatList,TouchableOpacity,Image,ImageBackground,TouchableWithoutFeedback,View, Animated, StyleSheet } from 'react-native';
import styles from './Styles';
import dummyData from '../../assets/moviesDummy';

const CarrouselBasic = ({nav, route, movies})=>{

    // const {movies} = route.params;

    const handleOnPress = (item)=>{
        nav.navigate('MovieFocus',{title:item.movie.title, idMovie: item.movie._id, imageSource: item.movie.imageMobile, ratings: item.movie.value, genre: 'dummy', age: item.movie.minAge, desc: item.movie.description, urlFile: item.movie.movieUrl});
    }

    return(
        <Animated.FlatList
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        // data={dummyData.newSeason}
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
                        // source={item.thumbnail} dummy
                        source={{uri:item.movie.imageMobile}}
                        style={{
                            width: '100%',
                            height:'100%',
                            // width: 200,
                            resizeMode:'contain',
                            backgroundColor:'red'
                            
                        }}
                        onError={()=>console.log('Error al cargar la imagen del carrousel basic')}
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

