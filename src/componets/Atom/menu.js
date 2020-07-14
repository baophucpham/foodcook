import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Alert, Image } from "react-native";
import * as imageURl from '../../Assets/images/imageURL';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import DentailComponent from "../molecules/Detail";
import Data from '../../Assets/images/data_menu';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.initData = Data;
        this.state = {
            Data: this.initData
        }

    }

    renderItem_type = ({ item }) => {
        return (
            <TouchableOpacity 
            style={styles.item_type}
            onPress={()=>this.props.navigation.navigate("Detail", {
                item:item
            })} >
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    ItemSeparatorComponent = () => {
        return(
            <View
            style={{height:20}}
            />
        )
    }

    ItemSeparatorComponent_type = () => {
        return (
            <View style={{ width: 10 }} />
        )
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.flatList}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                        showsVerticalScrollIndicator={false} />
                </View>

                <SafeAreaView style={styles.containerList}>
                    <FlatList
                        data={this.state.Data}
                        renderItem={({ item }) =>
                            <View style={{ flex: 1 }}>

                                <Text style={[styles.type,
                                { color: item.color }]}>{item.type}</Text>
                                <View style={[styles.item, {
                                    backgroundColor: item.color
                                }]}>
                                    <FlatList
                                        data={item.data}
                                        renderItem={this.renderItem_type}
                                        keyExtractor={(item, index) => index.toString()}
                                        horizontal={true}
                                        showsVerticalScrollIndicator={false}
                                        ItemSeparatorComponent={this.ItemSeparatorComponent_type}
                                    >
                                    </FlatList>
                                </View>

                            </View>
                        } />
                </SafeAreaView>

            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:10,
        marginBottom:10,
        backgroundColor: 'white',
    },
    containerList: {
        flex: 1,

    },
    type: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    item: {
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
    item_type: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
    },
    name: {
        marginTop: 12,
        color: 'white',
        fontSize: 16,
    },
});