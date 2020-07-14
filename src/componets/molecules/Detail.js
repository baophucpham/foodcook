import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as imageURl from '../../Assets/images/imageURL';
import IoniCon from "react-native-vector-icons/Ionicons";
import Data from '../../Assets/images/data_all';
import { color } from 'react-native-reanimated';

export default class DentailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.route.params.item
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
          <View style={styles.status}>
            <Text style={{ color: 'green' }}>AVALIABLE</Text>
          </View>
          <ScrollView style={styles.scroll}>
            <Text style={styles.textPrice}>{this.state.item.price}</Text>
            <Text numberOfLines={2} style={styles.textName}></Text>
            <Text>Nấm Rơm Kho Tiêu Chay với vị đậm đà, là một trong những món chay quen thuộc trong ngày chay thuần Việt. Cách làm nấm rơm kho tiêu không khó, vị nấm ngọt tự nhiên, kết hợp cùng các gia vị đơn thuần, tạo nên món ăn ngon, vừa chống ngán cho bữa cơm ngán thịt hay ngày chay, mà còn rất tốt cho sức khỏe. Ngày bận rộn, nấm rơm kho tiêu là lựa chọn lý tưởng đấy.</Text>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Edit", {
                  item: this.state.item
                })}
                style={styles.buttom}>
                <Text style={styles.textButtom}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  scroll: {
    borderRadius: 12
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
  textPrice: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 20,
  },
  textName: {
    color: '#3e3c3e',
    fontWeight: 'bold',
    fontSize: 45,
    marginTop: 5,
  },
  buttom: {
    alignItems: 'center'
  },
  textButtom: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 30
  },
})