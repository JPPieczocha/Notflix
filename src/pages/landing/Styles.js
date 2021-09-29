import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
    },
    logoWrapper:{
        height:'40%',
        width:'100%',

        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsWrapper:{
        width:'100%',

        justifyContent:'center',
        alignItems:'center',

    },
    button:{
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
    buttonSignUp:{
        height: 50,
        width:'90%',

        backgroundColor: Colors.transparentWhite,
        marginBottom: 10,

        borderRadius: 25,
        
        justifyContent: 'center',
        alignItems:'center'
    },
    inputWrapper:{
        justifyContent:'center',
        alignItems:'center',

        width:'100%',
        marginTop:5,
    },
    input:{
        width:'90%',
        height: 50,

        marginVertical: 10,

        backgroundColor: Colors.white,

        borderRadius: 15,
        padding: 10
    },
    paquetesWrapper:{
        width:'100%',
    },
    paqueteText:{
        color:Colors.white,

        fontSize: 20,
        marginTop: 5
        //TODO: Modificar ese margin, posible ponerlo automatico con flex
    }

})

export default styles;
