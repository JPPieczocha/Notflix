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
		height: '40%',
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
		justifyContent:"center",

		height: '60%'
	},
	buttonStyle:{
		height: 50,
        width:'90%',

        backgroundColor: Colors.secondary,
        marginVertical: 10,

        borderRadius: 25,
        
        justifyContent: 'center',
        alignItems:'center'
	},
	buttonText:{
		color: Colors.white,
        fontSize: 20
	},
	buttonStyleLogOut:{
		height: 50,
        width:'75%',

        backgroundColor: Colors.logOut,
        marginVertical: 30,

        borderRadius: 25,
        
        justifyContent: 'center',
        alignItems:'center'
	},
});

export default styles;