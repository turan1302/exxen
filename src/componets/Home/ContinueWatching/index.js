import React from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import continue_watching from "../../../data/continue_watching";
import * as NavigationService from "../../../NavigationService";

const ContinueWatching = ({position,width,height}) => {
    const length = continue_watching.length;

    return (
        <View style={styles.container}>
           <View style={styles.section_text_container}>
               <Text style={styles.section_left_text}>İzlemeye Devam Et</Text>
               <TouchableOpacity>
                   <Text style={styles.section_right_text}>Tümünü Gör</Text>
               </TouchableOpacity>
           </View>
            <FlatList snapToAlignment={"center"}  decelerationRate={"fast"} showsHorizontalScrollIndicator={false} horizontal data={continue_watching} renderItem={({item,index})=>(
                <TouchableOpacity onPress={()=>{
                    NavigationService.navigate("MovieDetail",item);
                }}>
                    <Image style={styles.image(position,width,height,length,index)} source={{uri : item.image}}/>
                </TouchableOpacity>
            )}/>
        </View>
    )
}

export default ContinueWatching;
