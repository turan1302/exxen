import React, {useState} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather";
import * as NavigationService from "../../../NavigationService";

const Index = ({marginTop=0,marginBottom = 0,position,width,height}) => {

    const [isSecure, setIsSecure] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={[styles.login_form_area,{
            marginTop: marginTop,
            marginBottom : marginBottom
        }]}>
            <Text style={styles.login_form_title}>Giriş Yap</Text>

            <View style={styles.login_form_email_area}>
                <TextInput
                    onChangeText={(e)=>setEmail(e)}
                    style={styles.login_form_email_input}
                    placeholderTextColor={"#606060"}
                    placeholder={"E-Posta Adresi"}
                    value={email}
                />
                <Icon name={"mail"} size={18} color={"#f8cb08"} style={styles.form_icon}/>
            </View>

            <View style={styles.login_form_password_area}>
                <TextInput
                    onChangeText={(e)=>setPassword(e)}
                    secureTextEntry={isSecure}
                    style={styles.login_form_password_input}
                    placeholderTextColor={"#606060"}
                    placeholder={"Şifre"}
                    value={password}
                />
                <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
                    <Icon name={!isSecure ? "eye" : "eye-off"} size={18} color={"#f8cb08"} style={styles.form_icon}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={styles.forget_button_text}>Şifremi Unuttum?</Text>
            </TouchableOpacity>

            <Text style={styles.social_media_area_text}>veya diğer hesaplarla devam et</Text>

            <View style={styles.social_media_area}>
                <TouchableOpacity style={styles.social_media_google_button}>
                    <Image source={require("../../../assets/logo/google.png")}
                           style={styles.social_media_google_icon(position, width, height)}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.social_media_facebook_button}>
                    <Image source={require("../../../assets/logo/facebook.png")}
                           style={styles.social_media_facebook_icon(position, width, height)}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=>{
                NavigationService.replace("GettingStarted");
            }} style={styles.login_button}>
                <Text style={styles.login_button_text}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Index;
