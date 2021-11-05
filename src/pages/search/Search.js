import React, { useState, useEffect, useRef } from "react";
import {
    View,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ActivityIndicator,
} from "react-native";
import styles from "./Styles";
import { getAllMovies } from "../../controllers/MoviesController";
import { UserContext } from "../../components/context/authContext";
import colors from "../../constants/colors";

const Search = ({ navigation }) => {
    const refInput = useRef(null);
    const refList = useRef([]);
    const AuxrefList = useRef([]);

    const [textSearch, setTextSearch] = useState("");
    const token = React.useContext(UserContext);
    // console.log(token);

    const [movies, setMovies] = useState();
    const [busy, setBusy] = useState(true);
    const [reload, setReload] = useState(false);
    const [movieFind, setMovieFind] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await getAllMovies(token.state.userToken);
            if (response === undefined) {
            } else {
                setMovies(response);
                setBusy(false);
                //refInput.current.focus();
            }
        };
        fetchMovies();
    }, [reload]);

    const handleTextInput = (text) => {
        setTextSearch(text);
        if (movies != undefined) {
            let auxArray = [];
            setMovieFind([]);

            // AuxrefList.current = [];
            // refList.current = [];

            if (text.length == 0) {
                setMovieFind([]);
                // refList.current = [];
            } else if (movies != undefined) {
                movies.map((movie, index) => {
                    movie.movies.map((insideItem, indexItem) => {
                        if (
                            insideItem.movie.title
                                .toLowerCase()
                                .includes(text.toLowerCase())
                        ) {
                            auxArray.push(insideItem);

                            // AuxrefList.current.push(insideItem);
                        }
                    });
                });
                setMovieFind(auxArray);
                //refInput.current.focus();
                //NO FUNCA ESE REFINPUT
                // refList.current = AuxrefList.current;
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.inputMain}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={"Busque lo que desee..."}
                        keyboardType={"web-search"}
                        keyboardAppearance={"dark"}
                        //ref={refInput}
                        onChangeText={(text) => handleTextInput(text)}
                    ></TextInput>
                </View>
                <View
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "82%",
                    }}
                >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={movieFind}
                        // data={refList.current}
                        numColumns={2}
                        keyExtractor={(item) => `${item._id}`}
                        renderItem={(item) => {
                            return (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("MovieFocus", {
                                            allData: item.item,
                                        })
                                    }
                                    style={styles.buttonMovie}
                                >
                                    <View
                                        style={[
                                            StyleSheet.absoluteFillObject,
                                            {
                                                alignItems: "center",
                                                overflow: "hidden",
                                                justifyContent: "center",
                                            },
                                        ]}
                                    >
                                        <Image
                                            source={{
                                                uri: item.item.movie
                                                    .imageMobile,
                                            }}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                resizeMode: "contain",
                                                backgroundColor:
                                                    colors.secondary,
                                            }}
                                            onError={() =>
                                                console.log(
                                                    "Error al cargar la imagen del carrousel basic"
                                                )
                                            }
                                            onProgress={() => {
                                                return (
                                                    <ActivityIndicator
                                                        size={"small"}
                                                        color={"white"}
                                                    />
                                                );
                                            }}
                                        ></Image>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                        ListEmptyComponent={() =>
                            textSearch === "" ? (
                                <View styles={{alignItems: 'center'}}>
                                    <Image
                                        style={styles.emptyImage}
                                        source={require("../../assets/landing/Logo_final.png")}
                                    />
                                    <Text style={{ color: "white", textAlign: 'center' }}>Empezá a escribir, nosotros te lo traemos.</Text>
                                </View>
                            ) : (
                                <Text style={{ color: "white" }}>
                                    No se han encontrado películas que coincidan con su búsqueda.
                                </Text>
                            )
                        }
                    ></FlatList>
                </View>
            </View>
        </View>
    );
};

export default Search;
