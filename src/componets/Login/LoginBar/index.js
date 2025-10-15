import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather";
import * as NavigationService from "../../../NavigationService";

const LoginBar = ({marginTop = 25,position,width,height}) => {
  return (
      <View style={styles.bar_container(marginTop)}>
          <Image source={require("../../../assets/logo/logo.png")} style={styles.bar_logo(position,width,height)}/>
          <TouchableOpacity onPress={()=>{
              NavigationService.navigate("Register");
          }} style={styles.bar_navigate_button_area}>
              <Text style={styles.bar_navigation_button_text}>ÜYE OL </Text>
              <Icon name={"arrow-right"} size={18} color={"#fff"} style={styles.bar_icon}/>
          </TouchableOpacity>
      </View>
  )
}

export default LoginBar
