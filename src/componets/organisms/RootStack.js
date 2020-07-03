import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import { View, Text } from "react-native";
import HomeComponent from "../molecules/Home";
import DentailComponent from "../molecules/Detail";


const Stack = createStackNavigator();

function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeComponent} />
                <Stack.Screen name="Detail" component={DentailComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default RootStack;