import {StyleSheet} from "react-native";
import Colors from '../../constants/colors'


const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primary,
		// alignItems: 'center',
		// justifyContent: 'center',
        height: '100%',
		borderTopWidth:2,
		borderTopColor: Colors.secondary
	},
    main: {
		width: '100%',
		height:'100%',
		alignItems: 'center',
		// justifyContent: 'center'
	},
	inputMain:{
		width:'100%',
		marginTop: 15,
		paddingBottom: 15,

		flexDirection: "row",
		alignItems:"center",
		justifyContent: "space-evenly",

		borderBottomWidth: 2,
		borderBottomColor: Colors.inactiveTint
	},
	inputText:{
		height: 50,
		width: '70%',

		backgroundColor: Colors.inactiveTint,
		color: Colors.transparentBlack,

		borderRadius: 20,

		paddingLeft: 20,
		paddingRight: 20
	}
});

export default styles;