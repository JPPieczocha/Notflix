import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";

import styles from "./Styles";
import { UserContext } from "../../components/context/authContext";
import Colors from "../../constants/colors";

export default function Profile({ navigation }) {
    const handleFacturacion = (value) => {
        openBrowserAsync(
            `https://fya-develop.vercel.app/?from=mobile&token=${value.state.userToken}`
        );
    };

    const redirectLegal = () => {
        openBrowserAsync(
            "https://www.termsfeed.com/public/uploads/2019/04/terms-and-conditions-template.pdf"
        );
    };

    const handleLogOut = (value) => {
        value.authContext.signOut();
    };

    return (
        <UserContext.Consumer>
            {(value) => (
                <View style={styles.container}>
                    <View style={styles.profileHeader}>
                        <View style={styles.profileImage}>
                            <Text
                                style={{ fontSize: 75, color: Colors.white }}
                                adjustsFontSizeToFit={true}
                                numberOfLines={1}
                            >
                                {value.state.userData.name[0].toUpperCase()}
                                {value.state.userData.last_name[0].toUpperCase()}
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={styles.headerProfileText}
                                adjustsFontSizeToFit={true}
                                numberOfLines={1}
                            >
                                {value.state.userData.name +
                                    " " +
                                    value.state.userData.last_name}
                            </Text>
                            <Text
                                style={styles.headerProfileText}
                                adjustsFontSizeToFit={true}
                                numberOfLines={1}
                            >
                                {value.state.userData.email}
                            </Text>
                        </View>
                        <View
                            style={{
                                position: "absolute",
                                bottom: 3,
                                left: 0,
                                right: 0,
                            }}
                        >
                            <Text
                                style={{ color: "grey", textAlign: "center" }}
                            >
                                Version: 0.5
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            justifyContent: "space-around",
                            paddingVertical: 20,
                        }}
                    >
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => handleFacturacion(value)}
                        >
                            <FontAwesome5
                                name="money-check"
                                size={24}
                                color="white"
                            />
                            <Text style={styles.buttonText}>AUTOGESTIÓN</Text>
                            <FontAwesome5
                                name="money-check"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => redirectLegal()}
                        >
                            <FontAwesome name="legal" size={24} color="white" />
                            <Text style={styles.buttonText}>LEGAL</Text>
                            <FontAwesome name="legal" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.buttonStyle,
                                { backgroundColor: Colors.logOut },
                            ]}
                            onPress={() => handleLogOut(value)}
                        >
                            <Ionicons
                                name="exit-outline"
                                size={24}
                                color="white"
                            />
                            <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
                            <Ionicons
                                name="exit-outline"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </UserContext.Consumer>
    );
}
