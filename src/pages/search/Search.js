import React, {useState ,useEffect} from 'react';
import { View, TextInput,Keyboard, TouchableWithoutFeedback, ScrollView, FlatList,Text, Dimensions,TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './Styles';

import { MovieContext } from '../../components/context/movieContext';
import { getAllMovies } from '../../controllers/MoviesController';


const Search = ()=>{

    const [textSearch, setTextSearch] = useState('');

    const [movies,setMovies] = useState()
	const [busy,setBusy] = useState(true);
	const [reload,setReload] = useState(false);
    const [movieFind, setMovieFind] = useState([]);

    useEffect(() => {
		const fetchMovies = async () => {
			const response = await getAllMovies();
			if(response === undefined){
			}else{
				setMovies(response.categories)
				setBusy(false)
			}
		}
		fetchMovies();
	}, [reload])

    const handleTextInput = (text) => {
        setReload(true);
        if(movies != undefined){
            // let stringAux = movies.filter(item => item.movie.title);
            // console.log(stringAux);
            // console.log(movies);
            // console.log(movies.filter((item)=> item.movies.filter((insideItem)=> insideItem.title.includes(text))));

            let auxArray = [];
            console.log(movies);
            
            if(movies != undefined){
                movies.map((item,index) => {
                    item.movies.map((insideItem, indexItem)=>{
                        // console.log(insideItem.movie.title);
                        // console.log(insideItem.movie.imageMobile);
                        if(insideItem.movie.title.includes(text)){
                            console.log('TENGOO');
                            auxArray.push(insideItem.movie)
                            setMovieFind(...movieFind,auxArray);
                        }
                    })
                })
                // setMovieFind(auxArray)
            }
            
            // setMovieFind(movies.filter(item => item.movies.title.includes(text)));
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={styles.main}>
                <View style={styles.inputMain}>
                    <TextInput style={styles.inputText} 
                    placeholder={'Busque lo que desee...'} 
                    keyboardType={'web-search'} 
                    onSubmitEditing={(event)=>{
                        console.log(event.nativeEvent.text);
                        setTextSearch(event.nativeEvent.text)
                    }}
                    onChangeText={(text)=>handleTextInput(text)}
                    ></TextInput>
                </View>
                <View style={{backgroundColor:'red', width:'100%'}}>
                <FlatList
                data={movieFind}
                keyExtractor={item => `${item.pos}`}
                renderItem={(item)=> {
                    <TouchableOpacity
                    onPress={()=>console.log(item)}
                    style={styles.buttonMovie}
                    >
                    <View
                    style={[StyleSheet.absoluteFillObject,{
                        alignItems:'center',
                        overflow:'hidden',
                        justifyContent: 'center',
                    }]}>
                        <Image
                        source={{uri:item.item.imageMobile}}
                        style={{
                            width: '100%',
                            height:'100%',
                            resizeMode:'contain',
                            backgroundColor:'red'
                        }}
                        onError={()=>console.log('Error al cargar la imagen del carrousel basic')}
                        onProgress={()=> { return <ActivityIndicator size={'small'} color={'white'}/>}}
                        >
                        </Image>
                    </View>
                </TouchableOpacity>
                }}
                ListEmptyComponent={()=><Text style={{color: 'white'}}>VACIO</Text>}
                >
                </FlatList>
                </View>
            </View>
            </TouchableWithoutFeedback>

        </View>
    );
}

export default Search
