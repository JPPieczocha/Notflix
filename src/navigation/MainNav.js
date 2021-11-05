import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MovieFocus from "../pages/movieFocus/MovieFocus";
import MoviePlayer from "../pages/moviePlayer/MoviePlayer";
import Tabs from "./Tabs";
import { UserContext } from "../components/context/authContext";
import MovieDetails from "../pages/movieDetails/MovieDetails";

export default function MainNav({ navigation }) {
    const Stack = createStackNavigator();

    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });
    // El navigation container está abstraido en el App.js
    return (
        <UserContext.Consumer>
            {(value) => (
                <Stack.Navigator>
                    <Stack.Screen
                        name="Homee"
                        component={Tabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MovieFocus"
                        component={MovieFocus}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MoviePlayer"
                        component={MoviePlayer}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MovieDetails"
                        component={MovieDetails}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            )}
        </UserContext.Consumer>
    );
}
