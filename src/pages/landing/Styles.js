import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
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
        width:'80%',

        backgroundColor: colors.secondary,
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
        width:'80%',

        backgroundColor: colors.transparentWhite,
        marginBottom: 10,

        borderRadius: 25,
        
        justifyContent: 'center',
        alignItems:'center'
    },
    inputWrapper:{
        justifyContent:'center',
        alignItems:'center',

        marginTop:5,
        marginBottom: 50,
    },
    input:{
        width:'80%',
        height: 50,

        marginVertical: 10,

        backgroundColor: Colors.white,

        borderRadius: 15,
        padding: 10
    },

})

export default styles;
