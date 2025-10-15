import React, {useEffect, useState} from 'react'
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import DownloadBar from "../../componets/Downloads/DownloadBar";
import KeepWatching from "../../componets/Downloads/KeepWatching";
import not_started from "../../data/not_started";

const Downloads = () => {

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
            <DownloadBar/>
            <FlatList showsVerticalScrollIndicator={false} style={{
                paddingHorizontal : 10,
            }} ListHeaderComponent={()=>(
                <>
                    <KeepWatching position={position} width={width} height={height}/>

                    <View style={styles.title_container}>
                        <Text style={styles.title_text}>Henüz Başlamadıklarım</Text>
                        <Text style={styles.count_text}>[12]</Text>
                    </View>
                </>
            )} data={not_started} renderItem={({item,index})=>{
                return (
                    <TouchableOpacity style={styles.movie_button_style}>
                        <Image source={{uri : item.image}} style={styles.image(position,width,height)}/>
                        <Text style={styles.movie_name_style}>{item.name}</Text>
                    </TouchableOpacity>
                )
            }}/>
        </View>
    )
}

export default Downloads
