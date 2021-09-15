import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
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

        backgroundColor: Colors.primaryv3
    },
    image:{
        width: 200,
        height:200,
        resizeMode: 'contain',

        backgroundColor:'red'
    }

})

export default styles;