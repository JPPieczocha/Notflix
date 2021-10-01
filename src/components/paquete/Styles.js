import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:55,
        backgroundColor:Colors.transparentWhite, 

        borderRadius: 25,
        paddingHorizontal: 20,
        marginVertical: 5,

        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    infoWrapper:{

    },
    precioWrapper:{

    },
    nombre:{
        color: Colors.white,

        fontSize: 20

    },
    descripcion:{
        color: Colors.white

    },
    precio:{
        color: Colors.white,

        fontSize: 20
    }



})

export default styles;