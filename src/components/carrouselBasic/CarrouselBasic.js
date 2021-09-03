import React from 'react';
import {SafeAreaView,FlatList,TouchableOpacity,Image,ImageBackground,TouchableWithoutFeedback,View, Animated, StyleSheet } from 'react-native';
import styles from './Styles';
import dummyData from '../../assets/moviesDummy';

const CarrouselBasic = ({nav})=>{

    const handleOnPress = (item)=>{
        nav.navigate('MovieFocus',{title:item.name, idMovie: item.id, imageSource: item.details.coverImage, ratings: item.details.ratings, genre: item.details.genre, age: item.details.age, desc: item.details.desc});
    }

    return(
        <Animated.FlatList
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        data={dummyData.newSeason}
        keyExtractor={item => `${item.id}`}

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
                        source={item.thumbnail}
                        style={{
                            width: '100%',
                            resizeMode:'contain',
                        }}
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

