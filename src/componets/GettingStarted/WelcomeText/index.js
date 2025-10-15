import React from 'react'
import {Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import * as NavigationService from "../../../NavigationService";

const WelcomeText = () => {
  return (
    <>
        <Text style={styles.title_text}>
            Hiçbir yerde olmayan, en yeni Türk yapımı içerikler EXXEN'de!
        </Text>
        <Text style={styles.description_text}>Çocuklar, gençler ve tüm ailenin birlikte izleyebileceği her gün yeni içerikler ve sürpriz formatlar seni bekliyor.</Text>

        <TouchableOpacity onPress={()=>{
            NavigationService.navigate("WelcomeNavigator");
        }} style={styles.button}>
            <Text style={styles.button_text}>İzlemeye Başla</Text>
        </TouchableOpacity>
    </>
  )
}

export default WelcomeText
