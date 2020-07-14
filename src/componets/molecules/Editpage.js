import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import * as imageURl from '../../Assets/images/imageURL';
import Data from '../../Assets/images/data_all';

export default class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.route.params.item,
            name:'',
            price:''
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={imageURl.header_detail}
                    style={{ flex: 1, alignItems: 'center' }}
                    resizeMode={"stretch"}>

                    <View style={styles.image_Container}>
                        <Image
                            source={this.state.item.image}
                            style={styles.images} />
                    </View>

                </ImageBackground>
                <View style={styles.footer}>
                    <View style={styles.priceStatus}>
                        <TextInput
                            style={styles.pri}
                            onChangeText={(price) => this.setState({ price })}
                            value={this.state.item.price}
                        />
                        <TextInput
                            style={styles.names} 
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.item.name}
                        />

                        <TouchableOpacity
                            style={styles.buttonSave}
                            //gán lại dữ liệu 
                            onPress={() => {
                                var f = Data.findIndex(i => this.state.item.name == i.name);
                                Data[f].name = this.state.item.name
                            }}
                        >
                            <Text style={styles.savebut}>save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const height = Dimensions.get("screen").height;
const height_image = height * 0.45 * 0.45

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    footer: {
        flex: 3,
        paddingHorizontal: 20,
    },
    image_Container: {
        width: height_image,
        height: height_image,
        marginTop: height_image / 3,
    },
    images: {
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: height_image / 2,
    },
    priceStatus: {
        flex: 1,
        borderRadius: 15,
        alignItems: 'center'
    },
    pri: {
        height: 50,
        width: 50,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 110,
        marginVertical: 20
    },
    names: {
        height: 50,
        width: 300,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 20,
    },
    buttonSave: {
        height: 40,
        width: 80,
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 60,
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    savebut: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})