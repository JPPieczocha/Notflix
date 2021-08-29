import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
        height: 100,
        //Capaz sacar tamaño y definirlo en el home
        borderBottomColor: Colors.secondary, //SACAR, ES PRUEBA
        borderBottomWidth:2
	},
});

export default styles;