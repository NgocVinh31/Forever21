import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, ScrollView, Image } from 'react-native'
const DATA = [
  {
    id: '200044125421',
    name: 'Ribbed Notched Blazer',
    price: "39.99",
    Image1: "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?f%3D800x800",
  },
  {
    id: '200044125425',
    name: 'Ribbed Notched Blazer',
    price: "39.99",
    Image1: "https://4.imimg.com/data4/JT/XP/MY-27510575/mens-casual-shirts-500x500.jpg",
  },
  {
    id: '200044125428',
    name: 'Ribbed Notched Blazer',
    price: "39.99",
    Image1: "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2018/4/Seller/18144566/Images/18144566_0_casual-shirt-for-men.jpg",
  },
];
export default function App() {

  const mainWishList= ({item})=> (
    <View style={style.main_item}>
    <Text style={style.main_item_tittle}>{item.name}</Text>
    <View style={style.main_item_frame}>
    <View style={style.main_item_frame_img}>
      <Image style={style.main_item_frame_img_item} source={{uri: item.Image1}}></Image>
    </View>

    <View style={style.main_item_frame_text}>
      <Text style={style.main_item_frame_text_price}>${item.price}</Text>
      <Text style={style.main_item_frame_text_text}>SKU#: <Text style={style.main_item_frame_text_text_bold}>{item.id}</Text></Text>
      <TouchableOpacity style={style.main_item_frame_text_button}><Text style={style.main_item_frame_text_text_bold}>Add to cart</Text></TouchableOpacity>
      <TouchableOpacity style={style.main_item_frame_text_button}><Text style={style.main_item_frame_text_text_bold}>Remove from wishlist</Text></TouchableOpacity>
    </View>
    </View>
    </View>
  );
  return (
    
      <SafeAreaView>
        <View style={style.main}>
        <Text style={style.main_tittle}>Your Wishlist</Text>
        </View>

        <FlatList
        data={DATA}
        renderItem={mainWishList}
        keyExtractor={item => item.id}
      />

    </SafeAreaView>
    
  )
}
const style= StyleSheet.create({
  main: {
    marginLeft: 7,
    marginRight: 7,
  },
  main_tittle: {
    textAlign: "center",
    fontSize: 16,
  },
  // làm phần danh sách
  main_item: {
    margin: 7,
    padding: 5,
    borderTopWidth: 1,
    borderColor: "#302e3436",
  },
  main_item_tittle: {
    fontSize: 18,
    marginBottom: 15,
  }, 
  main_item_frame: {
    display: "flex",
    justifyContent: "space-between", 
    flexDirection: "row",
  },
  main_item_frame_img: {
    width: "40%", 
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  main_item_frame_img_item: {
    width: "100%",
    height: "80%",
    resizeMode: "cover",
  },
  main_item_frame_text: {
    width: "55%",
  },
  main_item_frame_text_price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  main_item_frame_text_text: {
    fontSize: 16,
    marginBottom: 7,
  },
  main_item_frame_text_text_bold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  main_item_frame_text_button: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8, 
    borderWidth: 1,
    backgroundColor: "#80808024",
    borderColor: '#80808024'
  }
})



