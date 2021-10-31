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

		borderRadius: 100,

		//---prueba
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: Colors.secondary


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
        width:'75%',

        backgroundColor: Colors.secondary,
        marginTop: 20,

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
        marginVertical: 20,

        borderRadius: 25,
        
        justifyContent: 'center',
        alignItems:'center'
	},







	mainContentWrapper:{

        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',

        backgroundColor: Colors.primaryv3,

		marginTop: 5

    },
    scrollView: {
        width: '100%',
        height: '100%',
    },
    headerOption: {
        height: 75,

        justifyContent:'center',
        alignItems: 'center',
        borderColor: Colors.inactiveTint,

        borderTopWidth: 2,
        borderBottomWidth: 2,

        marginBottom: 3
    },
    headerOptionText: {
        color: Colors.inactiveTint,
        fontSize: 24
    },
    optionButton: {
        flexDirection: 'row',
		width: '100%',

        height: 40,

        borderBottomWidth: 1,
        borderColor: Colors.inactiveTint
    },
    opcionText: {
        color: Colors.inactiveTint,

        alignSelf: 'center',

        fontSize: 16,
        left: 10,
    },
    opcionIcon: {
        position:'absolute',

        right: 15,
        alignSelf: 'center',
    },
});

export default styles;