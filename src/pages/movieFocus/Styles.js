import {StyleSheet} from "react-native";
import Colors from '../../constants/colors'


const styles = StyleSheet.create({
	main:{
        height:'55%',
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    mainHeader:{
        height: 150,
        width:'100%',
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        color: Colors.white,
        fontSize: 30
    },
    playMovie:{
        height:60,
        width: '70%',

        backgroundColor:Colors.secondary,
        borderRadius: 25,

        alignItems:"center",
        justifyContent:"center"
    },
    playMovieText:{
        color: Colors.white,
        fontSize: 26
    },
    details:{
        marginTop: 15,
        height: 60,
        width: '70%',

        backgroundColor:Colors.transparentWhite,
        borderRadius: 25,

        alignItems:"center",
        justifyContent:"center"
    }
});

export default styles;