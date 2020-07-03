import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TextInput, Button, Alert } from 'react-native';
import * as imageURl from '../../Assets/images/imageURL';
import IoniCon from "react-native-vector-icons/Ionicons";
import { color } from 'react-native-reanimated';

export default class DentailComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <ImageBackground
          source={imageURl.header_detail}
          style={{ flex: 1, alignItems: 'center' }}
          resizeMode={"stretch"}>

          <View style={styles.image_Container}>
            <Image
              source={this.props.route.params.image}
              style={styles.images} />
          </View>

        </ImageBackground>
        <View style={styles.footer}>
          <View style={styles.status}>
            <Text style={{ color: 'green' }}>AVALIABLE</Text>
          </View>

    <Text style={styles.textPrice}>{this.props.route.params.price}</Text>
    <Text numberOfLines={2} style={styles.textName}>{this.props.route.params.name.toUpperCase()}</Text>
        </View>
      </View>
    )
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
    flex: 1,
    paddingHorizontal: 40,
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
  status: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 3,
    borderColor: 'green'
  },
  input: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 3,
    marginHorizontal: 130,
    marginVertical: 8,
    borderColor: 'green'
  },
  textPrice:{
    color:'green',
    fontWeight:'bold',
    fontSize:40,
    marginTop:20,
  },
  textName:{
    color:'#3e3c3e',
    fontWeight:'bold',
    fontSize:45,
    marginTop:5,
  }
})