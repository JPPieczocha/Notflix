import React, {useState ,useEffect} from 'react';
import { View, TextInput,Keyboard, TouchableWithoutFeedback, ScrollView, FlatList,Text, Dimensions,TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import styles from './Styles';

import { MovieContext } from '../../components/context/movieContext';
import { getAllMovies } from '../../controllers/MoviesController';
import { UserContext } from '../../components/context/authContext';


const Search = ({navigation})=>{

    const [textSearch, setTextSearch] = useState('');
	const token = React.useContext(UserContext);
    // console.log(token);


    const [movies,setMovies] = useState()
	const [busy,setBusy] = useState(true);
	const [reload,setReload] = useState(false);
    const [movieFind, setMovieFind] = useState([]);

    useEffect(() => {
		const fetchMovies = async () => {
			const response = await getAllMovies(token.state.userToken);
			if(response === undefined){
			}else{
				setMovies(response)
				setBusy(false)
                // console.log(response);
			}
		}
		fetchMovies();
	}, [reload])

    const handleTextInput = (text) => {
        if(movies != undefined){
            let auxArray = [];
            if(text== ''){

            }else
            if(movies != undefined){
                movies.map((movie,index) => {
                    movie.movies.map((insideItem, indexItem)=>{
                        if(insideItem.movie.title.includes(text)){
                            auxArray.push(insideItem)
                        }
                    })
                })
                setMovieFind(...movieFind,auxArray);
            }
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
                <View style={{width:'100%', justifyContent: 'center', alignItems: 'center', height: '82%', backgroundColor: 'green'}}>
                <FlatList
                data={movieFind}
                numColumns={2}
                keyExtractor={item => `${item._id}`}
                renderItem={(item)=> {
                    console.log(item);
                    return <TouchableOpacity
                    onPress={()=>navigation.navigate('MovieFocus',{allData: item.item})}
                    style={styles.buttonMovie}
                    >
                    <View
                    style={[StyleSheet.absoluteFillObject,{
                        alignItems:'center',
                        overflow:'hidden',
                        justifyContent: 'center',
                    }]}>
                        <Image
                        source={{uri:item.item.movie.imageMobile}}
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
