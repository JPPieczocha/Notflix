import {StyleSheet,Dimensions} from "react-native";
import Colors from '../../constants/colors';
const { width, height } = Dimensions.get("window");


const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primaryv3,

        height: '100%',
		borderTopWidth:2,
		borderTopColor: Colors.secondary
	},
    main: {
		width: '100%',
		height:'100%',
		alignItems: 'center',
	},
	inputMain:{
		width:'100%',
		marginTop: 15,
		paddingBottom: 15,

		flexDirection: "row",
		alignItems:"center",
		justifyContent: "space-evenly",
	},
	inputText:{
		height: 50,
		width: '90%',

		backgroundColor: Colors.inactiveTint,
		color: Colors.transparentBlack,

		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 20
	},

	buttonMovie: {
        width: width*0.35, 
        height: width*0.5,
        marginHorizontal: 10,
        marginVertical: 5,
        
        justifyContent:'center', 
        alignItems:'center',

        borderRadius: 15,
        overflow:'hidden'
	},
});

export default styles;