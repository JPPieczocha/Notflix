import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Colors from '../../constants/colors'
import styles from './Styles';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import Carrousel from '../../components/carrousel/Carrousel';
import CarrouselBasic from '../../components/carrouselBasic/CarrouselBasic';
import { getAllMovies } from '../../controllers/MoviesController';
import LoadingPage from '../../components/loadingPage/LoadingPage';


const Home = ({navigation})=>{

	const [movies,setMovies] = useState()
	const [busy,setBusy] = useState(true);
	const [reload,setReload] = useState(false);

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await getAllMovies();
			if(response === undefined){
				console.log('Nada xd');
			}else{
				setMovies(response.categories)
				setBusy(false)
			}
		}
		fetchMovies();
	}, [reload])


  // Voy a crear tantos carrousels como cap haya
    return (
		<View style={styles.container}>
			{busy ? <LoadingPage/> : null}
			<View style={styles.mainWrapper}>
				<ScrollView style={{width: '100%', height: '100%'}}>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10, marginBottom: 10}}>What's next?</Text>
					<Carrousel nav={navigation}></Carrousel>
					{/* <Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Comedias</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Drama</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Terror</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Acción</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>Documental</Text>
					<CarrouselBasic nav={navigation}></CarrouselBasic> */}

					{
						movies === undefined ? null : movies.map((item, index) =>{
							return(
								<View  key={index}>
									<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>{item.name}</Text>
									<CarrouselBasic nav={navigation} movies={item.movies}></CarrouselBasic>
								</View>
							)
							
						})
					}
				</ScrollView>
			</View>
		</View>
    );
}

export default Home;