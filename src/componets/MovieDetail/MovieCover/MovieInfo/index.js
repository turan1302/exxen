import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Feather from "react-native-vector-icons/Feather";

const MovieInfo = ({params}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.movie_name}>{params.name}</Text>
            <View style={styles.movie_duration_container}>
                <Text style={styles.movie_name_desc}>{params.duration}</Text>
                <View style={styles.movie_hd_text_container}>
                    <Text style={styles.movie_hd_text}>HD</Text>
                </View>
            </View>

            {(params.categories?.length>0) && (
                <View style={styles.movie_categories_container}>
                    {params.categories.map((item,index)=>(
                        <Text key={index} style={styles.movie_category_text}>{item} •  </Text>
                    ))}
                    <Text style={styles.movie_release_year_text}>{params.release_year}</Text>
                </View>
            )}
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.left_button}>
                    <Feather name={"plus"} color={"#f8cb08"} size={15}/>
                    <Text style={styles.left_button_text}>Listeme Ekle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.right_button}>
                    <Feather name={"play"} color={"#000"} size={15}/>
                    <Text style={styles.right_button_text}>Hemen İzle</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MovieInfo
