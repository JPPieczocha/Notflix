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
	},

	profileHeader:{
		height: '45%',
		width: '100%',
		justifyContent:"center",
		alignItems:"center",
		borderBottomColor: Colors.secondary,
		borderBottomWidth: 2,
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
		marginBottom: 5,
		fontSize: 24
	},

	packageProfileText: {
		color: 'grey',
		marginBottom: 5
	},

	buttonWrapper: {
		alignItems:"center",
		justifyContent:"space-between",
		height: '55%'
	},

	buttonStyle:{
		width:'90%',
		height: '19%',

		flexDirection:'row',
		justifyContent:"space-around",

		borderWidth: 2,
		borderColor: Colors.inactiveTint,
		borderRadius: 5,

		marginTop: '5%',
		
	},

	buttonText:{
		color: Colors.white,
		fontSize: 32,
		alignSelf: "center",
	},

	buttonStyleLogOut:{
		width:'90%',
		height: '12%',

		flexDirection:'row',
		justifyContent:"space-around",

		borderWidth: 2,
		borderColor: Colors.logOut,
		borderRadius: 5,
		
		marginTop: '5%',
		marginBottom: '10%',
	},

	buttonTextogOut:{
		color: Colors.logOut,
		fontSize: 24,
		alignSelf: "center",
	}


});

export default styles;