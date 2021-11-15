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
        width:'95%',
        maxHeight: 300
    },
    paqueteText:{
        color:Colors.white,

        fontSize: 20,
        marginVertical: 7
    },


    modalFilter:{
        flex: 1,

        justifyContent:'center',
        alignItems:'center',

        backgroundColor: 'rgba(0,0,0, 0.6)',
    },
    modalContainer:{

        width: '90%',

        padding: 15,
        
        alignItems: 'center',
        justifyContent:'center',
        
        backgroundColor: Colors.primaryv3,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.secondary
    },

    modalTitle: {
        fontSize: 28,
        color: 'white',
        textAlign: 'center'
    },

    modalDescription: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginVertical: 10
    },

    modalButton: {
        alignSelf: 'center',
        width: '75%',
        height: 32,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: Colors.logOut
    },
    modalButtonText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    }

})

export default styles;
