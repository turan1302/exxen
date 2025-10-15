import React from 'react'
import {Text, View} from "react-native";
import styles from "./styles";

const DownloadBar = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>İndirilenler</Text>
    </View>
  )
}

export default DownloadBar
