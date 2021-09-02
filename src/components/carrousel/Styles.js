import {StyleSheet, Dimensions} from "react-native";
import Colors from '../../constants/colors'

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	buttonMovie: {
        width: 250, 
        height: width*0.90,

        justifyContent:'center', 
        alignItems:'center',

        borderRadius: 25,
        margin: 10
	},
});

export default styles;