import React from 'react';
import {SafeAreaView,FlatList,TouchableOpacity,ScrollView,Image,ImageBackground,TouchableWithoutFeedback,View,Text, Animated, Dimensions } from 'react-native';
import MoviePreview from '../moviePreview/MoviePreview';
import MovieBasicPreview from '../movieBasicPreview/MovieBasicPreview';
import dummyData from '../../assets/moviesDummy';

const CarrouselBasic = ({nav})=>{

    const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;
    const { width, height } = Dimensions.get("window");

    const handleOnPress = (item)=>{
        console.log(item.name);
        nav.navigate('MovieFocus',{title:item.name, idMovie: item.id, imageSource: item.details.coverImage});
    }

    return(
        <Animated.FlatList
        horizontal
        pagingEnabled
        // snapToAlignment="center"
        // snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        // contentContainerStyle={{
        //     marginTop: 10
        // }}
        data={dummyData.newSeason}
        keyExtractor={item => `${item.id}`}
        onScroll={
            Animated.event([{nativeEvent:{contentOffset: {x: newSeasonScrollX}}}],{useNativeDriver:false})
        }

        // Se renderiza la pelicula
        renderItem={({index,item}) => {
            return(
                // <TouchableOpacity
                //     onPress={()=>nav.navigate('MovieFocus',{title:item.name, idMovie: item.id, imageSource: item.details.coverImage})}
                // >
                //     <MoviePreview src={item.thumbnail} ></MoviePreview>
                // </TouchableOpacity>
                <TouchableOpacity
                // onPress={()=>nav.navigate('MovieFocus',{title:item.name, idMovie: item.id, imageSource: item.details.coverImage})}
                onPress={()=>handleOnPress(item)}
                >
                    <MovieBasicPreview src={item.thumbnail} ></MovieBasicPreview>
                </TouchableOpacity>
            )
        }}>
        </Animated.FlatList>
    )
}

export default CarrouselBasic

