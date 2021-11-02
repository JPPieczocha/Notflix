import {StyleSheet} from "react-native";
import Colors from '../../constants/colors'


const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primaryv3,
        
		height: '100%',

		borderTopWidth:2,
		borderTopColor: Colors.secondary,
	},
	profileHeader:{
		height: '33%',
		width: '100%',

		justifyContent:"center",
		alignItems:"center",

		borderBottomColor: Colors.secondary,
		borderBottomWidth: 2,

		flexDirection: "row",
		justifyContent: "space-around"
	},
	profileImage:{
		resizeMode: "cover",

		height: '60%',
		aspectRatio: 1/1,

		borderRadius: 100,

		//---prueba
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 5,
		borderColor: Colors.secondary


	},
	headerProfileText:{
		color: Colors.white,

		marginTop: 5,
		marginBottom: 5,

		fontSize: 24
	},

	buttonStyle:{
		height: 50,
        width:'90%',

		flexDirection: "row",

        backgroundColor: Colors.secondary,
        marginVertical: 20,

        borderRadius: 25,
        
		alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems:'center'
	},

	buttonText:{
		color: Colors.white,
        fontSize: 20
	},
});

export default styles;