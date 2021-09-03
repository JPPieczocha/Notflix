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
        // justifyContent:"center",
        justifyContent:"space-between",
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
    },
    movieData:{
        width:'100%',
        height: 50,

        // backgroundColor: 'red',

        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-around"

    },
    movieDataText:{
        color: Colors.white,
        backgroundColor:Colors.transparentWhite,
        paddingHorizontal: 20,
        paddingVertical:10,
        
        overflow:'hidden',
        borderRadius: 15
    }
});

export default styles;