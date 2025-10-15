import React from 'react'
import {FlatList, Image, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import popular from "../../../data/popular";
import * as NavigationService from "../../../NavigationService";

const Popular = ({position,width,height}) => {
    const length = popular.length;

  return (
    <View style={styles.container}>
      <FlatList snapToAlignment={"center"} decelerationRate={"fast"} showsHorizontalScrollIndicator={false} horizontal data={popular} renderItem={({item,index})=>(
          <TouchableOpacity onPress={()=>{
              NavigationService.navigate("MovieDetail",item);
          }}>
              <Image style={styles.image(position,width,height,length,index)} source={{uri : item.image}}/>
          </TouchableOpacity>
      )}/>
    </View>
  )
}

export default Popular;
