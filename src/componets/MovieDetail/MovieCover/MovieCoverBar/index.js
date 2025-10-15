import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import * as NavigationService from "../../../../NavigationService";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import styles from "./styles";

const MovieCoverBar = ({params}) => {
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => {
              NavigationService.pop();
          }}>
              <FontAwesome6 name={"arrow-left-long"} size={30} color={"#f8cb08"}/>
          </TouchableOpacity>
          <Text style={styles.bar_title}>{params.title}</Text>
      </View>
  )
}

export default MovieCoverBar
