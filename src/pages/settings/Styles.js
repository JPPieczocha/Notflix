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

    }

})

export default styles;
