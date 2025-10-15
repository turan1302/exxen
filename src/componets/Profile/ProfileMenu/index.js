import React from 'react'
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";
import profile_menu from "../../../data/profile_menu";
import profile_menu_sub from "../../../data/profile_menu_sub";

const ProfileMenu = () => {
  return (
    <ScrollView style={styles.container}>
            {profile_menu.map((item,index)=>(
                <TouchableOpacity key={index} style={styles.menu_item_container}>
                    <Feather name={item.icon} size={23} color={"#88898a"}/>
                    <Text style={styles.menu_item_text}>{item.text}</Text>
                </TouchableOpacity>
            ))}

            <View style={styles.policy_menu_container}>
                {profile_menu_sub.map((item,index)=>(
                    <Text key={index} style={styles.policy_menu_text}>{item.name}</Text>
                ))}
            </View>
    </ScrollView>
  )
}

export default ProfileMenu
