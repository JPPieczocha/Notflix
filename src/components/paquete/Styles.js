import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        backgroundColor:Colors.transparentWhite, 

        borderRadius: 25,
        paddingHorizontal: 20,
        marginVertical: 5,

        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        

        borderWidth: 0,
        borderColor: Colors.secondary
    },

    containerSelected:{
        width:'100%',
        height:70,
        backgroundColor:Colors.transparentWhite, 

        borderRadius: 25,
        paddingHorizontal: 20,
        marginVertical: 5,

        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',

        borderWidth: 3,
        borderColor: Colors.secondary
    },

    infoWrapper:{
        width: '70%'
    },
    precioWrapper:{
        width: '30%',
        alignItems: 'flex-end'
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