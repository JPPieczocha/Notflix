import {StyleSheet} from "react-native";
import Colors from '../../constants/colors'


const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primaryv3,
        height: '100%',
		borderTopWidth:2,
		borderTopColor: Colors.secondary
	},
	mainWrapper: {
        height: '100%',
		width:'100%',

		flexDirection: 'column',
		alignItems:"center",
		justifyContent:"center"
	},
	profileHeader:{
		height: '35%',
		width: '100%',
		justifyContent:"center",
		alignItems:"center",
		
		borderBottomColor: Colors.secondary,
		borderBottomWidth: 2
	},
	profileImage:{
		resizeMode: "cover",
		height: 150,
		width: 150,
		borderRadius: 100
	},
	headerProfileText:{
		color: Colors.white,
		marginTop: 5,
		fontSize: 24
	},
	headerPackageText:{
		color: Colors.white,
	},
	scroll:{
		width:'90%',
		height:'50%',
	},
	buttonStyle:{
		width:'100%',
		marginTop: 20,

		flexDirection:'row',
		justifyContent:"space-around",

		borderBottomWidth:2,
		borderBottomColor: Colors.inactiveTint
	},
	buttonText:{
		color: Colors.white
	},
	buttonStyleLogOut:{
		width:'90%',
		marginTop: 10,
		marginBottom:40,
		height:'5%',

		justifyContent:"center",
		alignItems:"center",

		borderBottomWidth:2,
		borderBottomColor: Colors.logOut
	},
	buttonTextogOut:{
		color: Colors.logOut
	}


});

export default styles;