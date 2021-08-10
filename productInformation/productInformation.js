import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native'
// import style from "./productInformationStyle"

export default function productInfromation() {
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={style.container} >
                <View style={style.main1}>
                    <Image style={style.main1Image} source= {{uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png'}}/>
                    <View style={style.main1_circle} >
                    <View style={[style.main1_circle_item, style.main1_circle_item_active]}></View>
                    <View style={style.main1_circle_item}></View>
                    <View style={style.main1_circle_item}></View>
                    <View style={style.main1_circle_item}></View>
                    </View>

                    <View style={style.main1_Text}>
                    <Text style={style.main1_Text_Tittle}>Textured Cotton Skort</Text>
                    <Text style={style.main1_Text_Price}>$19.99</Text>
                    </View>
                </View>

                {/* sang làm phần main thứ 2 */}

                <View style={style.main2}>
                <Text style={style.main2_tittle}>Color: <Text style={style.main2_tittle_bold}>CAMEL</Text></Text>
                <View style={style.main2_choose}>
                    <View style={style.main2_choose_item}><View style={[style.main2_choose_item_color, style.main2_choose_item_color1]}></View></View>
                    <View style={style.main2_choose_item}><View style={[style.main2_choose_item_color, style.main2_choose_item_color2]}></View></View>
                </View>

                <View style={style.main2_tittle_size}>
                    <Text style={style.main2_tittle} >Size: <Text style={style.main2_tittle_bold} >XS </Text> </Text>
                    <View><Text style={style.main2_tittle}>Size Chart</Text></View>
                </View>
                <View  style={style.main2_choose_size}>
                   <TouchableOpacity style={style.main2_choose_size_item}><Text style={style.main2_choose_size_item_text}>XS</Text></TouchableOpacity>
                   <TouchableOpacity style={style.main2_choose_size_item}><Text style={style.main2_choose_size_item_text}>S</Text></TouchableOpacity>
                   <TouchableOpacity style={style.main2_choose_size_item}><Text style={style.main2_choose_size_item_text}>m</Text></TouchableOpacity>
                   <TouchableOpacity style={style.main2_choose_size_item}><Text style={style.main2_choose_size_item_text}>l</Text></TouchableOpacity>
                   <TouchableOpacity style={style.main2_choose_size_item}><Text style={style.main2_choose_size_item_text}>xl</Text></TouchableOpacity>
                </View>
                </View>

                <TouchableOpacity style={style.main_to_buy}><Text style={style.main_to_buy_tittle}>add to cart</Text></TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const style =StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: "center",
    },
    main1: {
        width: "100%",
        borderBottomWidth: 1, 
    }, 
    main1Image: {
        width: "100%",
        height: 300,
    },
    main1_circle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20,
    },
    main1_circle_item: {
        width: 10,
        height: 10,
        borderWidth: 1,
        borderRadius: 50,
        margin: 5,
    },
    main1_circle_item_active: {
        backgroundColor: "black",
    },
    main1_Text: {
        marginBottom: 20,
        marginLeft: 7,
    },
    main1_Text_Tittle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
    },
    main1_Text_Price: {
        fontSize: 17,
        marginBottom: 10,
        fontWeight: "bold",
    },
    // làm phần main thứ 2
    main2: {
        marginTop: 20,
        marginBottom: 20,
    },
    main2_tittle: {
        fontSize: 16,
        marginBottom: 20,
    },
    main2_tittle_bold: {
        fontWeight: "bold",
    },
    main2_choose: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
    },
    main2_choose_item: {
        width: 50,
        height: 50,
        borderWidth: 1,
        margin: 7,
        borderRadius: 50,
        padding: 7,
        justifyContent: "center",
        alignItems: "center"
    },
    main2_choose_item_color: {
        width: 40,
        height: 40,
        borderRadius: 50,
        opacity: 0.6,
    },
    main2_choose_item_color1: {
        backgroundColor: "brown",
        borderColor: "brown",
    },
    main2_choose_item_color2: {
        width: 50,
        height: 50,
        backgroundColor: "blue",
        borderColor: "blue"
    },
    main2_tittle_size: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    main2_choose_size: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    main2_choose_size_item: {
        width: "20%",
        height: 50,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 7,
    },
    main2_choose_size_item_text: {
        fontSize: 16,
        fontWeight: "700",
        textTransform: "uppercase",
    },
    main_to_buy: {
        position: "absolute",
        width: "90%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
        bottom: 20,
        left: 30,
    },
    main_to_buy_tittle: {
        fontSize: 18,
        fontWeight: "700",
    },
});
