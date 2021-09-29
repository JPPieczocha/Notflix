import {StyleSheet} from "react-native";
import Colors from '../../constants/colors'


const styles = StyleSheet.create({
	main:{
        height:'55%',
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    mainHeader:{
        width:'100%',

        justifyContent:"space-between",
        alignItems:"center",
        marginVertical: 15
    },
    titleText:{
        color: Colors.white,
        fontSize: 30
    },
    playMovie:{
        height:40,
        width: '90%',

        backgroundColor:Colors.secondary,
        borderRadius: 25,

        marginTop: 5,
        alignItems:"center",
        justifyContent:"center"
    },
    playMovieText:{
        color: Colors.white,
        fontSize: 20
    },
    details:{
        marginTop: 15,
        height: 40,
        width: '90%',

        backgroundColor:Colors.transparentWhite,
        borderRadius: 25,

        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },
    movieData:{
        width:'100%',
        height: 50,

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
    },
    sinopsis:{
        width:'90%',
        alignSelf:"center"
    },
    sinopsisText:{
        color: Colors.white
    }
});

export default styles;