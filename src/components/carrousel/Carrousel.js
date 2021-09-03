import React, {useState, useEffect} from 'react';
import {SafeAreaView,FlatList,TouchableOpacity,ScrollView,Image,ImageBackground,TouchableWithoutFeedback,View,Text, Animated, Dimensions,StyleSheet } from 'react-native';
import MoviePreview from '../moviePreview/MoviePreview';
import dummyData from '../../assets/moviesDummy';
import styles from './Styles'
import Colors from '../../constants/colors';

const Carrousel = ({nav})=>{

    const scrollX = React.useRef(new Animated.Value(0)).current;
    const { width, height } = Dimensions.get("window");
    const SPACER_SIZE = (width - 270)/2 //Quiero la mitad de cada lado, es un dummy de espacio
    
    const data = ()=>{
        return [{key: 'left', id: '-1'},...dummyData.newSeason,{key: 'right', id: '-2'}];
    }

    const renderPuntos = ()=>{
        const dotPosition = Animated.divide(scrollX, 270)
        return(
            <View
            style={{marginTop: 10, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
                {data().map((item,index) =>{

                    const dotColor = dotPosition.interpolate({
                        inputRange: [index-2, index-1, index],
                        outputRange: [Colors.inactiveTint, Colors.secondary , Colors.inactiveTint],
                        extrapolate: "clamp"
                    })

                    if(item.id == '-1' || item.id == '-2'){
                        return(
                            <Animated.View
                            key={`dot-${index}`}
                            style={{
                                borderRadius: 100,
                                width: 6,
                                height: 6,
                                marginHorizontal: 6
                            }}>
                        </Animated.View>
                        )
                    }
                    return(
                        <Animated.View
                            key={`dot-${index}`}
                            style={{
                                borderRadius: 100,
                                backgroundColor: dotColor,
                                width: 10,
                                height: 10,
                                marginHorizontal: 6
                            }}>
                        </Animated.View>
                    )
                })}
            </View>
        )
    }

    return(    
        <View>
            <Animated.FlatList
            horizontal
            snapToInterval={270} //Es 250 + 10 de margin de cada lado (+20)
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            contentContainerStyle={{alignItems: 'center', marginTop: 15}}
            bounces = {false}
            data={data()}
            keyExtractor={item => `${item.id}`}
            overScrollMode={'always'}
            onScroll={Animated.event([{nativeEvent:{contentOffset: {x: scrollX}}}],{useNativeDriver:false})}

            // Se renderiza la pelicula
            renderItem={({index,item}) => {
                if(item.id == '-2' || item.id == '-1'){
                    return(
                        <View style={{width: SPACER_SIZE, backgroundColor:'red'}}>
                            {/* Esto genera el espacio a la izq y derecha para mantener centrado el flat list y mostrar cosas a los costados.
                            Podría haber hecho que simplemente se muestre uno en el medio con una propiedad, pero me gustó más esta. */}
                        </View>
                    )
                }

                // const inputRange = [(index-1)*270, index*270, (index+1)*270] //250 es el item full size, poner constante se usa para el tamaño que usa la animacion. Deprecado.
                const inputRange = [(index-2)*270, (index-1)*270, index*270] //250 es el item full size, poner constante se usa para el tamaño que usa la animacion.
                //Uso -2 y -1 porque ahora está el "dummy" que desplaza ambos lados
                //Previo item y siguiente...

                const translateY = scrollX.interpolate({
                    inputRange,
                    outputRange: [0,-20,0]
                })

                return(
                    <TouchableOpacity
                    onPress={()=>nav.navigate('MovieFocus',{title:item.name, idMovie: item.id, imageSource: item.details.coverImage, ratings: item.details.ratings, genre: item.details.genre, age: item.details.age})}
                    style={styles.buttonMovie}>
                        <Animated.View style={
                            [StyleSheet.absoluteFillObject,{
                                overflow:'hidden', 
                                borderRadius: 25, 
                                alignItems:'center',
                                justifyContent:'center', 
                                transform:[{translateY}]
                            }]}>
                                <Animated.Image 
                                source={item.thumbnail}
                                style={{resizeMode:'contain', width:250}}
                                >
                                </Animated.Image>
                        </Animated.View>
                    </TouchableOpacity>
                )
            }}>
            </Animated.FlatList>
            {renderPuntos()}
        </View>
    )
}

export default Carrousel