import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native'
const DATA = [
  {
    id: '2000424935',
    Image1: "https://4.imimg.com/data4/JT/XP/MY-27510575/mens-casual-shirts-500x500.jpg",
    color_1: 'white',
    color_2: "red",
    size: "m",
    price: "39.99"
  },
  {
    id: '2000424936',
    Image1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ymb1amxwudbl4v9paf8m/sportswear-t-shirt-zmMkxS.png",
    color_1: 'brown',
    color_2: "blue",
    size: "m",
    price: "40"
  },
  {
    id: '2000424937',
    Image1: "https://assets.ajio.com/medias/sys_master/root/20210403/ywxs/60686961f997dd7b645dbf0c/-473Wx593H-461119026-black-MODEL.jpg",
    color_1: 'green',
    color_2: "yellow",
    size: "m",
    price: "50",
  },
];

export default function App() {
  const main2List = ({ item }) => (
    <View>
      <View style={style.main2_list_item}>
    <View style={style.main2_list_item_image}><Image style={style.main2_list_item_image_item} source={{uri: item.Image1}}></Image></View>
    <View style={style.main2_list_item_information}>
      <Text style={style.main2_list_item_information_text1}>${item.price}</Text>
      <Text style={style.main2_list_item_information_text}>SKU#: <Text style={style.main2_list_item_information_text2}>{item.id}</Text></Text>
      <Text style={style.main2_list_item_information_text}>Color: <Text style={style.main2_list_item_information_text2}>{item.color_1}/{item.color_2}</Text></Text>
      <Text style={style.main2_list_item_information_text}>Size: <Text style={style.main2_list_item_information_text2}>{item.size}</Text></Text>

      <View style={style.main2_list_item_information_choose}>
        <Text style={[style.main2_list_item_information_choose_item, style.main2_list_item_information_choose_item1]}> Xóa</Text>
        <Text style={[style.main2_list_item_information_choose_item, style.main2_list_item_information_choose_item2]}>Qty: <Text>1</Text></Text>
        <Text style={[style.main2_list_item_information_choose_item, style.main2_list_item_information_choose_item1]}>Thêm</Text>
      </View>
    </View>
    </View>

    </View>
  );


  const footer =()=>{
      return (
        <View>
            <View>
        <View style={style.main3}>
      <Text style={style.main3_tittle}>*Have A Promo?</Text>
      <View style={style.main3_fill}>
        <TextInput style={style.main3_fill_input}></TextInput>
        <TouchableOpacity style={style.main3_fill_submit} ><Text style={style.main3_fill_submit_text}>Apply</Text></TouchableOpacity>
      </View>
    </View>
    
    <View style={style.main4}>
    <View style={style.main4_item}>
      <Text style={style.main4_item_text}>Subtotal</Text>
      <Text style={style.main4_item_text}>$39.98</Text>
    </View>

    <View style={style.main4_item}>
      <Text style={style.main4_item_text}>Shipping</Text>
      <Text style={style.main4_item_text}>$39.98</Text>
    </View>

    <View style={[style.main4_item, style.main4_item_border]}>
      <Text style={style.main4_item_text}>Sale Tax</Text>
      <Text style={style.main4_item_text}>$39.98</Text>
    </View>

    <View style={[style.main4_item]}>
      <Text style={style.main4_item_text1}>Estimated Total</Text>
      <Text style={style.main4_item_text1}>$39.98</Text>
    </View>
    </View>
      </View>
      <View style={style.mainBuy}>
      <TouchableOpacity style={[style.mainBuy_button, style.mainBuy_button1]}><Text style={style.mainBuy_button_text}>Checkout</Text></TouchableOpacity>
      <TouchableOpacity style={[style.mainBuy_button]}><Text style={style.mainBuy_button_text}>Pay</Text></TouchableOpacity>
    </View>
        </View>
      )
  }
  return (
      <SafeAreaView>
      <View style={style.container}>
      <View style={style.main}>
      {/* làm phần main1 */}
        <View style={style.main1}>
        <Text style={style.main1_tittle}></Text>
        <Text style={style.main1_tittle}>Your bag (<Text>1</Text>)</Text>
        <Text style={style.main1_tittle}>TÌm kiếm</Text>
        </View>
        {/* làm phần main2 */}
        <View style={style.main2}>
          <Text style={style.main2_tittle}>WESC Lets Get Weird Graphic Tee</Text>
          <FlatList
        data={DATA}
        renderItem={main2List}
        keyExtractor={item => item.id}
      />
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

const style =StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  main: {
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 100,
  },
  main1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center" ,
    marginBottom: 20,
  },
  main1_tittle: {
    width: "30%",
    textAlign: "center",
    fontSize: 17,
  },
  // làm phần main2
  main2: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#8080806b",
  },
  main2_tittle: {
    fontSize: 17,
    marginBottom: 15,
  },
  main2_list_item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 5,
  },
  main2_list_item_image: {
    width: "40%",
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  main2_list_item_image_item: {
    width: "90%",
    height: "90%",
  },
  main2_list_item_information: {
    width: "55%",
  },
  main2_list_item_information_text: {
    fontSize: 16,
    marginBottom: 7,
  },
  main2_list_item_information_text1: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 7,
  },
  main2_list_item_information_text2: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  main2_list_item_information_choose: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  main2_list_item_information_choose_item: {
    width: "30%",
    fontSize: 15,
    textAlign: "center",
  },
  main2_list_item_information_choose_item1: {
    borderWidth: 1,
    width: 55,
    height: 55,
    borderRadius: 50,
    lineHeight: 55,
  },
  main2_list_item_information_choose_item2: {
    fontWeight: "bold",
  }, 
  // làm phần main3
  main3: {
    marginBottom: 30,
  },
  main3_tittle: {
    fontSize: 16,
    opacity: 0.6,
  },
  main3_fill: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  main3_fill_input: {
    width: "70%",
    height: 40,
  },
  main3_fill_submit: {
    width: "30%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8080806b",
  },
  // làm main 4
  main4: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#8080806b",
  },
  main4_item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 7,
    marginBottom: 7,
  },
  main4_item_text: {
    fontSize: 17,
  },
  main4_item_border: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#8080806b",
  },
  main4_item_text1: {
    fontSize: 20,
    fontWeight: "bold",
  }, 


  // làm phần mainBuy
  mainBuy: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0, 
  },
  mainBuy_button: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: "white",
  },
  mainBuy_button1: {
    backgroundColor: "#fff700",
    borderColor: "#fff700",
  },
  mainBuy_button_text: {
    fontSize: 25,
    fontWeight: "bold",
  },
})
