import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Dimensions, Image} from 'react-native';
import Colors from '../../constants/colors'

const MoviePreview = ({src})=>{

    const { width, height } = Dimensions.get("window");

    return(
        <View
        style={{
            alignItems:'center',
            // width: width*0.7,
            // height: width*0.9,
            justifyContent: 'center',
        }}
        >
            <Image 
            source={src}
            style={{
                width: width*0.3,
                height: width*0.50,
                resizeMode:'contain',
                // justifyContent:"flex-end",
                // borderColor: Colors.secondary,
                // borderWidth: 2,
                borderRadius: 25,

                // backgroundColor: 'red'
            }}
            >
            </Image>
        </View>

    );

}

export default MoviePreview;