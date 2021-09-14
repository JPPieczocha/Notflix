import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView,FlatList,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Colors from '../../constants/colors'
import styles from './Styles';

const MovieDetails = ({navigation,route})=>{

    const {title, idMovie, imageSource,ratings,genre,age, desc} = route.params;
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
            <View style={{height:100,justifyContent:'center', position:'absolute', top:0, left: 0, width:'100%', paddingTop: 40}}>
                <Text style={{justifyContent:'center',color:'white',paddingLeft:140,flexDirection:'row',top:40,fontWeight:'bold',fontSize:20}}>Detalles</Text>
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
                <View style={styles.sep}/>
                
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <ScrollView style={{marginTop:150}}>
                <Text style={{color:"#fff",fontSize:20,fontWeight:'bold',justifyContent:'center',marginHorizontal:130,marginBottom:20}}>{route.params.title}</Text>
                <Text style={{color:"#fff",fontSize:20,fontWeight:'bold',marginBottom:20,marginHorizontal:15}}>Reparto</Text>
                <FlatList
                    //contentContainerStyle={gStyle.pHHalf}
                    data={dataArray}
                    horizontal
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => {
                        return(
                            <View>
                                <Image source={item.image} style={{resizeMode:'center',height:90,width:100,borderRadius:100}}></Image>
                                <Text style={{color:'#C5C3C3',paddingLeft:10,marginTop:3}}>{item.title}</Text>
                            </View>
                        )
                    }}
                    showsHorizontalScrollIndicator={false}
                    />
                <Text style={{color:"#fff",fontSize:20,fontWeight:'bold',marginBottom:20,marginHorizontal:15,marginTop:23}}>Sinopsis</Text>
                <Text style={{marginHorizontal:15,color:'#C5C3C3'}}>To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion memorizing every step, every detail, every probability culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.</Text>
                <Text style={{color:"#fff",fontSize:20,fontWeight:'bold',marginBottom:20,marginHorizontal:15,marginTop:23}}>Director</Text>
                <Text style={{marginHorizontal:15,color:'#C5C3C3'}}>David Fincher</Text>
                <Text style={{color:"#fff",fontSize:20,fontWeight:'bold',marginBottom:20,marginHorizontal:15,marginTop:23}}>IMDb Rating</Text>
                <View style={{flexDirection:'row',marginBottom:15}}>
                    <Ionicons name={'star'} size={30} color={'gold'} style={{marginHorizontal:15}}/>
                    <Text style={{marginHorizontal:10,color:'#C5C3C3',fontSize:16,marginTop:7}}>7.5/10</Text>
                </View>
            </ScrollView>
            {header()}
        </View>
    )
}

export default MovieDetails