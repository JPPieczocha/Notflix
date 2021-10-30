import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView,FlatList,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Colors from '../../constants/colors'
import styles from './Styles';

const MovieDetails = ({navigation,route})=>{

    const {allData} = route.params;
    const dataArray = [
        {   
         image:require('../../assets/images/images/series/actorsAvatars/brad.jpg'),
         title:"Brad Pitt",
         id:1,
        },
        {
            image: require('../../assets/images/images/series/actorsAvatars/angelina.jpg'),
            title:"Angelina Jolie",
            id:2,
        },
        {   
            image:require('../../assets/images/images/series/actorsAvatars/brad.jpg'),
            title:"Brad Pitt",
            id:3,
        },
        {
            image: require('../../assets/images/images/series/actorsAvatars/angelina.jpg'),
            title:"Angelina Jolie",
            id:4,
        },
        {   
            image:require('../../assets/images/images/series/actorsAvatars/brad.jpg'),
            title:"Brad Pitt",
            id:5,
        },
        {
            image: require('../../assets/images/images/series/actorsAvatars/angelina.jpg'),
            title:"Angelina Jolie",
            id:6,
        }
    ]

    const header = ()=>{
        return(
            <View style={styles.header}>
                <View
                style={{
                    width:50,
                    height:50,
                    backgroundColor: Colors.transparentWhite,
                    justifyContent:'center',
                    alignItems:'center',
                }}
                >
                    <TouchableOpacity onPress={()=>navigation.pop()}>
                        <Ionicons name={'arrow-back'} size={30} color={Colors.inactiveTint}/>
                    </TouchableOpacity>
                </View>
                <Text style={{color:"#fff",fontSize:23,fontWeight:'bold', textAlign: 'center'}}>{allData.movie.title}</Text>
                <View style={{
                    width:50,
                    height:50,
                    justifyContent:'center',
                    alignItems:'center',
                }}></View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            {header()}
            <ScrollView style={{width: '100%'}} bounces={false}>
                {/* <Text style={styles.detailText}>Reparto</Text> */}
                {/* <FlatList
                    data={dataArray}
                    bounces={false}
                    horizontal
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => {
                        return(
                            <View style={styles.actorsItem}>
                                <Image source={item.image} style={{resizeMode:'cover',height:90,width:90,borderRadius:100}}></Image>
                                <Text style={{color:Colors.white, marginTop:5}}>{item.title}</Text>
                            </View>
                        )
                    }}
                    showsHorizontalScrollIndicator={false}
                    /> */}
                <Text style={styles.detailText}>Sinopsis</Text>
                <Text style={{marginHorizontal:15,color:'#C5C3C3'}}>{allData.movie.description}</Text>
                <Text style={styles.detailText}>Lanzamiento</Text>
                <Text style={{marginHorizontal:15,color:'#C5C3C3'}}>{allData.movie.launch}</Text>
                <Text style={styles.detailText}>Director</Text>
                <Text style={{marginHorizontal:15,color:'#C5C3C3'}}>{allData.movie.director}</Text>
                <Text style={styles.detailText}>Producer</Text>
                <Text style={{marginHorizontal:15,color:'#C5C3C3'}}>{allData.movie.producer}</Text>
                <Text style={styles.detailText}>IMDb Rating</Text>
                <View style={{flexDirection:'row',marginBottom:10, alignItems:'center'}}>
                    <Ionicons name={'star'} size={30} color={'gold'} style={{marginLeft:15}}/>
                    <Text style={{marginHorizontal:10,color:'#C5C3C3',fontSize:20}}>{allData.movie.value}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default MovieDetails