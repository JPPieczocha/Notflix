import React from 'react';
import {SafeAreaView,FlatList,TouchableOpacity,ScrollView,Image,ImageBackground,TouchableWithoutFeedback,View,Text, Animated, Dimensions } from 'react-native';
import MoviePreview from '../moviePreview/MoviePreview';

import dummyData from '../../assets/moviesDummy';



const Carrousel = ({nav})=>{

    const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;
    const { width, height } = Dimensions.get("window");

    return(
        <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        // contentContainerStyle={{
        //     marginTop: SIZES.radius
        // }}
        data={dummyData.newSeason}
        keyExtractor={item => `${item.id}`}
        onScroll={
            Animated.event([{nativeEvent:{contentOffset: {x: newSeasonScrollX}}}],{useNativeDriver:false})
        }

        // Se renderiza la pelicula
        renderItem={({index,item}) => {
            return(
                <TouchableOpacity
                    onPress={()=>nav.navigate('MovieFocus',{title:item.name, idMovie: item.id, imageSource: item.details.coverImage})}
                >
                    <MoviePreview src={item.thumbnail} ></MoviePreview>
                </TouchableOpacity>
            )
        }}>

        </Animated.FlatList>
    )
}

export default Carrousel

