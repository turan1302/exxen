import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Feather from "react-native-vector-icons/Feather";
import account from "../../../data/account";

const ProfileBar = (props) => {

    const {position, width, height} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profil</Text>
            <View style={styles.profile_bar_container}>
                <View style={styles.profile_bar_container_left_area}>
                    <Image source={require("../../../assets/profile/image.jpg")} style={styles.image(position,width,height)}/>
                    <View style={styles.profile_bar_account_container}>
                        <Text style={styles.profile_bar_account_name}>{account.name}</Text>
                        <Text style={styles.profile_bar_account_email}>{account.email}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Feather color={"#f8cb08"} name={"edit-2"} size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileBar
