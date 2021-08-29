import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Dimensions} from 'react-native';

const MoviePreview = ({src})=>{

    const { width, height } = Dimensions.get("window");

    return(
        <View
        style={{
            alignItems:'center',
            width:width,
            justifyContent: 'center',
        }}
        >
            <ImageBackground
                        source={src}
                        resizeMode={"cover"}
                        style={{
                            width: width*0.85,
                            height: width*0.90,
                            justifyContent:"flex-end"
                        }}
                        imageStyle={{
                            borderRadius: 25
                        }}
                        >
            </ImageBackground>
        </View>

    );

}

export default MoviePreview;