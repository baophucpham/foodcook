import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert ,AsyncStorage} from "react-native";
import * as imageURl from '../../Assets/images/imageURL';
import Data from '../../Assets/images/data_all';


export default class All extends React.Component {
    constructor(props) {
        super(props);
        this.initData = Data;
        this.state = {
            Data: this.initData,
            //activeRowKey: null,
        };

    }


    setModalVisibale = (bool) => {
        this.setState({ isModalVisible: bool });


    }

    _rangting(item) {
        let rating = [];
        for (i = 0; i < item; i++) {
            rating.push(
                <Image
                    source={imageURl.star}
                    style={{ width: 15, height: 15, marginRight: 3 }}
                    resizeMode="cover"
                />
            )
        }
        return rating;
    }


    renderItem = ({ item }) => {
        return <LinearGradient
            colors={['#009644', '#89C540',]}
            start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
            style={styles.item}>

            <View style={styles.image_container}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.rating}>
                    {this._rangting(item.rating)}
                </View>
            </View>

            <View style={styles.price_container}>
                <View style={styles.price}>
                    <Text style={styles.textPrice}>{item.price}</Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate("Detail", {
                        item: item
                    })
                }
                }
                style={styles.button}>
                <Image
                    style={styles.iconArrow}
                    source={imageURl.arrow}
                />
            </TouchableOpacity>

            <TouchableOpacity
            //Xoa du lieu
            onPress={() => this.alertDelete(item.name)}
                style={styles.buttonDelete}>

                <Image
                    style={styles.deletIcon}
                    source={imageURl.trash}
                />
            </TouchableOpacity>

        </LinearGradient>
    }

    alertDelete(index, foodName) {
        Alert.alert("Recipe",
        "Delete the recipe " + foodName + " ?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK", onPress: () => this.delete(index)
          }
        ],
        { cancelable: false })
    }

    async delete(index) {
        var arrTemp = this.state.Data;
        const { name } = this.props.navigation.state.params.name;
        arrTemp = arrTemp.filter(e => e.id != index);
        await AsyncStorage.setItem(name, JSON.stringify(arrTemp))
        this.setState({
          arrTemp: JSON.parse(await AsyncStorage.getItem(name))
        })
        console.log("DELETE", this.state.arrTemp);
      }


    ItemSeparatorComponent = () => {
        return (
            <View
                style={{
                    height: 10
                }}
            />
        )
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.flatList}>

                    <FlatList
                        data={this.state.Data}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.name.toString()}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                        showsVerticalScrollIndicator={true}
                    />

                </View>

            </View>
        )
    }
}

//style sheet
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 5,
    },
    flatList: {
        flex: 1,
        marginTop: 10,
    },
    text: {
        textAlign: "center"
    },
    item: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 20,
    },
    image_container: {
        height: 90,
        width: 90,
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    rating: {
        marginTop: 5,
        flexDirection: 'row',
    },
    button: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconArrow: {
        width: 15,
        height: 15,
    },
    price_container: {
        flexDirection: 'row',
        marginTop: 50,
    },
    price: {
        backgroundColor: 'white',
        paddingVertical: 9,
        paddingHorizontal: 15,
        borderRadius: 50,
    },
    textPrice: {
        color: 'green',
        fontWeight: 'bold',
    },
    buttonDelete: {
        width: 30,
        height: 30,
        backgroundColor: '#2DCC9F',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deletIcon: {
        width: 20,
        height: 20,
    },
});