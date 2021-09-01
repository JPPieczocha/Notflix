import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Dimensions, Image} from 'react-native';
import Colors from '../../constants/colors'

const MovieBasicPreview = ({src})=>{

    const { width, height } = Dimensions.get("window");

    return(
        <View
        style={{
            alignItems:'center',
            width:width,
            justifyContent: 'center',
        }}
        >
            {/* <ImageBackground
                        source={src}
                        resizeMode={"cover"}
                        style={{
                            width: width*0.85,
                            height: width*0.90,
                            // justifyContent:"flex-end",
                            borderColor: Colors.secondary,
                            borderWidth: 2,
                            borderRadius: 25
                        }}
                        imageStyle={{
                            borderRadius: 25
                        }}
                        >
            </ImageBackground> */}
            <Image 
            source={src}
            style={{
                marginTop: 10,
                width: width*0.85,
                height: width*0.30,
                borderRadius: 20
            }}
            >

            </Image>
        </View>

    );

}

export default MovieBasicPreview;