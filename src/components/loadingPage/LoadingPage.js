import React, {useState, useRef, useEffect} from 'react'
import { View, Text, ImageBackground,Platform, TouchableOpacity, Image, Animated, Dimensions, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from './Styles'
import Colors from '../../constants/colors';


const LoadingPage = ()=>{

    const [loading,setLoading] = useState(true);
    //Esto de arriba se sacaría. No se maneja acá. Es prueba

    const widthBar = useRef(new Animated.Value(50)).current;
    const topSlider = useRef(new Animated.Value(-50)).current;


    useEffect(() => {
        Animated.timing(topSlider, {
            toValue: loading ? 0 : -50,
            duration: 3000,
            useNativeDriver: false
        }).start(({finished})=>{
            Animated.timing(widthBar, {
                toValue: loading ? 150 : 50,
                duration: 3000,
                useNativeDriver: false
            }).start()
        })
    }, [loading])




    return(
        <View style={styles.container}>
            <Image source={require('../../assets/splash/Splash2.png')} style={styles.image}>

            </Image>
            <Animated.View style={{height: 10, backgroundColor: Colors.secondary, width: widthBar, position:'relative', top:topSlider}}>

            </Animated.View>

        </View>
    )

}

export default LoadingPage;