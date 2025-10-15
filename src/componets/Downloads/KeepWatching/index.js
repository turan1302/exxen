import React from 'react'
import downloads from "../../../data/downloads";
import {FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import styles from "../../../componets/Downloads/KeepWatching/styles";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";

const KeepWatching = ({position, width, height}) => {

    const length = downloads.length;

    return (
        <View style={styles.container}>
            <View style={styles.welcome_messages_container}>
                <Text style={styles.welcome_message_text}>İzlemeye Devam Et</Text>
                <TouchableOpacity>
                    <Text style={styles.show_all_button_text}>TÜMÜNÜ GÖR</Text>
                </TouchableOpacity>
            </View>

            <FlatList style={styles.flatlist_style} snapToAlignment={"center"} decelerationRate={"fast"} showsHorizontalScrollIndicator={false} horizontal
                      data={downloads} renderItem={({item, index}) => {

                return (
                    <TouchableOpacity>
                        <ImageBackground imageStyle={{borderRadius: 5}}
                                         style={styles.image(position, width, height, length, index)}
                                         source={{uri: item.image}}>
                            <LinearGradient
                                colors={["transparent", "#000000"]}
                                start={{x: 0, y: 0}}
                                end={{x: 0, y: 1}}
                                style={styles.gradient_container}
                            >

                                <Feather
                                    name="play-circle"
                                    color="#f0d42a"
                                    size={(position === "PORTRAIT") ? width * 0.10 : width * 0.05}
                                    style={styles.play_button_icon(position, width)}
                                />

                                <View style={styles.progressBackground}>
                                    <View
                                        style={[
                                            styles.progressFill,
                                            {width: `${item.progress * 100}%`}
                                        ]}
                                    />
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </TouchableOpacity>
                )
            }}/>
        </View>
    )
}

export default KeepWatching
