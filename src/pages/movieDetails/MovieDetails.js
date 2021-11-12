import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import styles from "./Styles";

const MovieDetails = ({ navigation, route }) => {
    const { allData } = route.params;
    let movieDate = allData.movie.launch;

    const header = () => {
        return (
            <View style={styles.header}>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: Colors.transparentWhite,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10
                    }}
                >
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Ionicons
                            name={"arrow-back"}
                            size={30}
                            color={Colors.secondary}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 23,
                        fontWeight: "bold",
                        maxWidth: '70%'
                    }}
                    numberOfLines={2}
                    adjustsFontSizeToFit={true}
                >
                    {allData.movie.title}
                </Text>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {header()}
            <ScrollView style={{ width: "100%" }} bounces={false}>
                <Text style={styles.detailText}>Sinopsis</Text>
                <Text style={{ marginHorizontal: 15, color: "#C5C3C3" }}>
                    {allData.movie.description}
                </Text>
                <Text style={styles.detailText}>Lanzamiento</Text>
                <Text style={{ marginHorizontal: 15, color: "#C5C3C3" }}>
                    {movieDate.slice(8, 10)} / {movieDate.slice(5, 7)} /{" "}
                    {movieDate.slice(0, 4)}
                </Text>
                <Text style={styles.detailText}>Director</Text>
                <Text style={{ marginHorizontal: 15, color: "#C5C3C3" }}>
                    {allData.movie.director}
                </Text>
                <Text style={styles.detailText}>Producer</Text>
                <Text style={{ marginHorizontal: 15, color: "#C5C3C3" }}>
                    {allData.movie.producer}
                </Text>
                <Text style={styles.detailText}>IMDb Rating</Text>
                <View
                    style={{
                        flexDirection: "row",
                        marginBottom: 10,
                        alignItems: "center",
                    }}
                >
                    <Ionicons
                        name={"star"}
                        size={26}
                        color={"gold"}
                        style={{ marginLeft: 15 }}
                    />
                    <Text
                        style={{
                            marginHorizontal: 10,
                            color: "#C5C3C3",
                            fontSize: 20,
                        }}
                    >
                        {allData.movie.value}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default MovieDetails;
