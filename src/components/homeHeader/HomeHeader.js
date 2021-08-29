import React from 'react';
import {SafeAreaView,FlatList,TouchableOpacity,ScrollView,Image,ImageBackground,TouchableWithoutFeedback,View,Text, Animated} from 'react-native';
import styles from './Styles';

export default function HomeHeader(){

    return(
        <View style={styles.container}>
            <Text style={{color:'white'}}>HOLA SOY EL HEADER</Text>
        
        </View>

    );

}