import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from "react-native";
import * as imageURl from '../../Assets/images/imageURL';
import Material from './MaterialTopTab';
import All from "../Atom/All";
import Menu from "../Atom/menu";
import Popular from "../Atom/popular";
import HomeTap from "./MaterialTopTab"


export default class HomeComponent extends React.Component {
    
    render() {
  
        return (
            <View style={styles.containerhead}>
                <View 
                style={styles.header}>

                    <ImageBackground source={imageURl.header}
                        style={styles.ImageBackground}>
                        <Text style={styles.title}>HOME</Text>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Add")}
                            style={styles.iconAdd}>
                            <Image
                                style={styles.addIcon}
                                source={imageURl.add}
                            />
                        </TouchableOpacity>
                    </ImageBackground>

                </View>
                <View style={styles.tarbar}>
                    <HomeTap{...this.props} />
                </View>

            </View>
        )
    }
}


const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
    containerhead: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 1,
        position: 'absolute',
    },
    textButtom: {
        flex: 1,
    },
    tarbar: {
        flex: 1,
        fontWeight: 'bold',
        marginTop: width * 0.31,
        paddingHorizontal: 45,
    },
    ImageBackground: {
        width: width * 0.5,
        height: width * 0.4,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 30,
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
    },
    iconAdd: {
        width: 40,
        height: 40,
        backgroundColor: '#7ABF40',
        marginLeft: 450,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        width: 30,
        height: 30,
    },
});
