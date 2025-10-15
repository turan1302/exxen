import React from 'react'
import {Image, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Feather from "react-native-vector-icons/Feather";
import Categories from "../Categories";

const Banner = ({position,width,height}) => {
  return (
   <View style={styles.bar_container}>
     <View style={styles.bar_top}>
      <Image style={styles.bar_logo(position,width,height)} source={require("../../../assets/logo/logo.png")}/>
      <View style={styles.bar_right}>
        <TouchableOpacity style={styles.bookmark_icon_button}>
            <Feather name={"bookmark"} size={20} color={"#fff"}/>
        </TouchableOpacity>
          <TouchableOpacity>
              <Feather name={"bell"} size={20} color={"#fff"}/>
          </TouchableOpacity>
      </View>
     </View>
       <Categories/>
   </View>
  )
}

export default Banner
