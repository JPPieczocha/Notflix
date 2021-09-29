import {StyleSheet, Dimensions} from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
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