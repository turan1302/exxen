import React from 'react'
import {Text, View} from "react-native";
import styles from "./styles";

const WelcomeMessage = () => {
  return (
   <View style={styles.container}>
       <Text style={styles.welcome_message_text}>Merhaba, Fatih 👋</Text>
        <Text style={styles.welcome_message_subtext}>İşte bugün senin için önerilerimiz</Text>
   </View>
  )
}

export default WelcomeMessage
