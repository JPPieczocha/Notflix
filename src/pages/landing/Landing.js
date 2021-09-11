import React from 'react'
import { View, Text, ImageBackground,Platform, TouchableOpacity } from 'react-native';
import styles from './Styles'

const Landing = () => {

    return(
        <View style={styles.container}>
            <ImageBackground
            source={require('./dummyLanding.PNG')}
            resizeMode={'cover'}>

            </ImageBackground>
            
        </View>
    )


}

export default Landing;