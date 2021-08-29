import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors'
import styles from './Styles';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import Carrousel from '../../components/carrousel/Carrousel';



const Home = ({navigation})=>{

    //Le podré pasar el navigation? O mando todo acá y fue?

    return (
      <View style={styles.container}>
        {/* <HomeHeader></HomeHeader> */}
        <View style={styles.mainWrapper}>
          <Text style={{color:'white'}}></Text>
          <Carrousel nav={navigation}></Carrousel>
        </View>
      </View>
    );

}

export default Home;