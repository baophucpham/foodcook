import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import * as imageURl from '../../Assets/images/imageURL';
import Data from '../../Assets/images/data_popular';

export default class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.initData = Data;
        this.state = {
            Data: this.initData
        }
    }

    _rating(item) {
        let rating = [];
        for (i = 0; i < item; i++) {
            rating.push(
                <Image
                    source={imageURl.star2}
                    style={{ width: 15, height: 15, marginRight: 3 }}
                    resizeMode="cover"
                />
            )
        }
        return rating;
    }


    ItemSeparatorComponent = () => {
        return(
            <View
            style={{height:30}}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flatList}>
                    <FlatList data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                        showsVerticalScrollIndicator={false}
                        numColumns={3} />
                </View>
                <SafeAreaView style={styles.containerList}>
                    <FlatList
                        data={this.state.Data}
                        renderItem={({ item }) =>
                            <View style={styles.item}>
                                <TouchableOpacity
                                    style={styles.Buttom}>
                                    <Image
                                        source={item.image}
                                        style={styles.image}
                                    />
                                    <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        {this._rating(item.rating)}
                                    </View>
                                    <Text
                                        numberOfLines={2}
                                        style={styles.comment}
                                    >"{item.comment}"</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        numColumns={3}
                    />
                </SafeAreaView>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop:20,
        marginBottom:5,
    },
    containerList: {
        flex: 1,
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'green',
    },
    name: {
        color: 'green',
        fontWeight: 'bold',
    },
    comment:{
        fontStyle:'italic',
        marginTop:5,
    },
});