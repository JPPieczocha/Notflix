import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',

        borderTopColor: Colors.secondary,
        borderTopWidth: 2,

        backgroundColor: Colors.primaryv3
    },
    
    mainWrapper:{

        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center'

    },

    scrollView: {
        width: '100%',
        height: '100%'
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
    }

})

export default styles;
