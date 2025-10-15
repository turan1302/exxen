import React, {useEffect, useState} from 'react'
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import MovieCover from "../../componets/MovieDetail/MovieCover";
import * as NavigationService from "../../NavigationService";

const MovieDetail = (props) => {

    const {route} = props;
    const {params} = route;


    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
    const {width, height} = windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    useEffect(() => {
        const handler = ({window}) => setWindowDimensions(window);
        const sub = Dimensions.addEventListener ? Dimensions.addEventListener('change', handler) : null;
        if (!sub) Dimensions.addEventListener('change', handler);

        return () => {
            try {
                if (sub && sub.remove) sub.remove();
                else Dimensions.removeEventListener('change', handler);
            } catch (e) {
            }
        };
    }, []);

    return (
        <View style={styles.container}>
           <FlatList showsVerticalScrollIndicator={false} columnWrapperStyle={styles.flatlist_column_style} ListHeaderComponent={(
               <>
                   <MovieCover position={position} width={width} height={height} params={params}/>
                   <View style={styles.detail_container}>
                       <Text style={styles.detail_text}>
                           {params.description}
                       </Text>
                   </View>
               </>
           )} data={params.similar_movies} numColumns={3} renderItem={({item,index})=>(
               <TouchableOpacity onPress={()=>{
                   NavigationService.push("MovieDetail",item);
               }}>
                   <Image style={styles.image_cover(position,width,height)} source={{uri : item.image}}/>
               </TouchableOpacity>
           )}/>
        </View>
    )
}

export default MovieDetail
