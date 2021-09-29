import {StyleSheet} from "react-native";
import Colors from '../../constants/colors'


const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primaryv3,
        height: '100%',
	},
    header:{
        height:100,
        width:'100%', 

        justifyContent:'space-around', 
        alignItems:'center', 
        flexDirection:'row',

        paddingTop: 40, 
        
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 2
    },
    mainWrapper: {

	},
    sep:{
        height:1,
        backgroundColor:Colors.secondary,
        width:'100%',

    },
    item:{
        padding:1,
    },
    detailText:{
        color:Colors.white,
        fontSize:20,
        fontWeight:'bold',

        marginBottom:10,
        marginHorizontal:15,
        marginTop:15
    },
    actorsItem:{
        backgroundColor:Colors.transparentWhite,
        
        marginHorizontal: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,

        justifyContent:"center",
        alignItems:"center",

        borderRadius: 15
    }
});

export default styles;