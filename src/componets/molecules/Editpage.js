import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import * as imageURl from '../../Assets/images/imageURL';

export default class EditComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={imageURl.header_detail}
                    style={{ flex: 1, alignItems: 'center' }}
                    resizeMode={"stretch"}>

                    <View style={styles.image_Container}>
                        <Image
                            source={imageURl.canhngusac}
                            style={styles.images} />
                    </View>

                </ImageBackground>
                <View style={styles.footer}>

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
})