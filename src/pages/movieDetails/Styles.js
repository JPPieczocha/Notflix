import {StyleSheet} from "react-native";
import Colors from '../../constants/colors'


const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primaryv3,
		// alignItems: 'center',
		// justifyContent: 'center',
        height: '100%',
		borderTopWidth:2,
	},
    mainWrapper: {
		// alignItems: 'center',
		// justifyContent: 'center',
        
	},
    sep:{
        height:1,
        backgroundColor:Colors.secondary,
        width:'100%',

    },
    item:{
        padding:1,
    }
});

export default styles;