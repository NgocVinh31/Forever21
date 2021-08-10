
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const login =()=>{
  return(
    <View>
      <View style={style.container}>
      <View style={style.header1}>
      <Text style={style.headerItem}>Sign in</Text>
      <Text style={style.headerItem}>Thoát</Text>
    </View>
    </View>
    <View style={style.header2}></View>



    <View style={style.container}>
    
    
    <View style={style.mainItem}>
    <Text style={style.mainItemText}>email address</Text>
    <TextInput style={style.mainItemInput} keyboardType="email-address"></TextInput>
    </View>

    <View style={style.mainItem}>
    <Text style={style.mainItemText}>password</Text>
    <TextInput style={style.mainItemInput} secureTextEntry={true}></TextInput>
    </View>


    {/* làm nút signin  */}
    <TouchableOpacity style={style.button} underlayColor="red">
      <View><Text style={style.buttonText}>sign in</Text></View>
    </TouchableOpacity>

    <Text style={style.forgot} >Forgot Password</Text>
    <Text style={style.Account} >Don't have an Account</Text>
    </View>
    </View>
  )
}
const style =StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  header1:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerItem: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header2: {
    height: 25,
    backgroundColor: "gray",
    opacity: 0.4,
    marginBottom: 15,
  },
  mainItem: {
    marginBottom: 15,
  },
  mainItemText: {
    fontSize: 16,
    opacity: 0.6,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  mainItemInput: {
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    backgroundColor: "yellow",
    borderColor: "yellow",
    marginBottom: 30,
  },
  buttonText: {
    height: 50,
    lineHeight: 50,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  forgot: {
    textAlign: "center",
    textDecorationLine: "underline",
    paddingBottom: 30,
    borderBottomWidth :1,
    marginBottom: 30,
    fontSize: 16,
  },
  Account: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 16,
  }
})
export default login;
