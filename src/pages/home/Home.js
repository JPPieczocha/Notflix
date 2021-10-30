import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView } from 'react-native';

import styles from './Styles';
import Carrousel from '../../components/carrousel/Carrousel';
import CarrouselBasic from '../../components/carrouselBasic/CarrouselBasic';
import { getAllMovies } from '../../controllers/MoviesController';
import LoadingPage from '../../components/loadingPage/LoadingPage';

import { MovieContext } from '../../components/context/movieContext';
import { UserContext } from '../../components/context/authContext';



const Home = ({navigation})=>{

	const token = React.useContext(UserContext);


	const [movies,setMovies] = useState([])
	const [busy,setBusy] = useState(true);
	const [reload,setReload] = useState(false);

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await getAllMovies(token.state.userToken);
			if(response === undefined){
			}else{
				setMovies(response);
				setBusy(false);
				// console.log(response);
			}
		}
		fetchMovies();
	}, [reload])


  	//Se crean tantos carrouseles como Divisiones haya del CMD
    return (
		<MovieContext.Provider value={{movies}}>
		<View style={styles.container}>
			{busy ? <LoadingPage/> : null}
			<View style={styles.mainWrapper}>
				<ScrollView style={{width: '100%', height: '100%'}}>
					<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10, marginBottom: 10}}>What's next?</Text>
					<Carrousel nav={navigation} movieData={movies[0]}></Carrousel>
					{
						movies === undefined ? null : movies.map((item, index) =>{
							if(item.name === "New Releases"){
								return null
							}else{
							return(
								<View key={index}>
									<Text style={{color:'white', fontSize: 20, paddingLeft: 15, marginTop: 10}}>{item.name}</Text>
									<CarrouselBasic nav={navigation} movies={item.movies}></CarrouselBasic>
								</View>
							)}
						})
					}
				</ScrollView>
			</View>
		</View>
		</MovieContext.Provider>
    );
}

export default Home;