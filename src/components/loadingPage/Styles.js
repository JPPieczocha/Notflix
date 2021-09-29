import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',

        justifyContent:'center',
        alignItems: 'center',

        position:'absolute',
        top:0,
        left: 0,

        backgroundColor: Colors.primaryv3,

        zIndex: 1000
    },
    image:{
        resizeMode: 'contain',
        width: '80%',
        height:'7%',

        backgroundColor:Colors.primaryv3,
        zIndex: 1000
    }

})

export default styles;