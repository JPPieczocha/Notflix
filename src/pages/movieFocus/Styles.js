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
        fontSize: 30,

        textAlign: "center"
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
    },


    modalFilter:{
        flex: 1,

        justifyContent:'center',
        alignItems:'center',

        backgroundColor: 'rgba(0,0,0, 0.6)',
    },
    modalContainer:{

        width: '90%',

        padding: 15,
        
        alignItems: 'center',
        justifyContent:'center',
        
        backgroundColor: Colors.primaryv3,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.secondary
    },

    title: {
        fontSize: 28,
        color: 'white',
        textAlign: 'center'
    },

    description: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginVertical: 10
    },

    button: {
        alignSelf: 'center',
        width: '75%',
        height: 32,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: Colors.logOut
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default styles;