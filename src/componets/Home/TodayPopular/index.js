import React from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import today_popular from "../../../data/today_popular";
import * as NavigationService from "../../../NavigationService";

const TodayPopular = ({position,width,height}) => {
    const length = today_popular.length;

    return (
        <View style={styles.container}>
           <View style={styles.section_text_container}>
               <Text style={styles.section_left_text}>Bugün Popüler</Text>
               <TouchableOpacity>
                   <Text style={styles.section_right_text}>Tümünü Gör</Text>
               </TouchableOpacity>
           </View>
            <FlatList snapToAlignment={"center"}  decelerationRate={"fast"} showsHorizontalScrollIndicator={false} horizontal data={today_popular} renderItem={({item,index})=>(
                <TouchableOpacity onPress={()=>{
                    NavigationService.navigate("MovieDetail",item);
                }}>
                    <Image style={styles.image(position,width,height,length,index)} source={{uri : item.image}}/>
                </TouchableOpacity>
            )}/>
        </View>
    )
}

export default TodayPopular
