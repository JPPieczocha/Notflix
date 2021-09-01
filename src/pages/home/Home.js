import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Colors from '../../constants/colors'
import styles from './Styles';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import Carrousel from '../../components/carrousel/Carrousel';
import CarrouselBasic from '../../components/carrouselBasic/CarrouselBasic';


const Home = ({navigation})=>{

  // Voy a crear tantos carrousels como cap haya

    return (
		<View style={styles.container}>
			<View style={styles.mainWrapper}>
			{/* <Text style={{color:'white'}}>asdasd</Text> */}
			{/* <Carrousel nav={navigation}></Carrousel> */}

				<ScrollView style={{width: '100%', height: '100%'}}>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10, marginBottom: 10}}>What's next?</Text>
					<Carrousel nav={navigation}></Carrousel>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Comedias</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Comedias</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Comedias</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Comedias</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Comedias</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic>
				</ScrollView>
			</View>
		</View>
    );
}

export default Home;