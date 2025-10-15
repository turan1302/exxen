import React, {useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather";

const RegisterForm = ({marginTop=0,marginBottom = 0,position,width,height}) => {

    const [isSecure, setIsSecure] = useState(true);
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={[styles.register_form_area,{
            marginTop: marginTop,
            marginBottom : marginBottom
        }]}>
            <Text style={styles.register_form_title}>Üye Ol</Text>

            <View style={styles.register_form_name_area}>
                <TextInput
                    onChangeText={(e)=>setName(e)}
                    style={styles.register_form_name_input}
                    placeholderTextColor={"#606060"}
                    placeholder={"Adınız"}
                    value={name}
                />
                <Icon name={"user"} size={18} color={"#f8cb08"} style={styles.form_icon}/>
            </View>

            <View style={styles.register_form_surname_area}>
                <TextInput
                    onChangeText={(e)=>setSurname(e)}
                    style={styles.register_form_surname_input}
                    placeholderTextColor={"#606060"}
                    placeholder={"Soyadınız"}
                    value={surname}
                />
                <Icon name={"user"} size={18} color={"#f8cb08"} style={styles.form_icon}/>
            </View>

            <View style={styles.register_form_email_area}>
                <TextInput
                    onChangeText={(e)=>setEmail(e)}
                    style={styles.register_form_email_input}
                    placeholderTextColor={"#606060"}
                    placeholder={"E-Posta Adresi"}
                    value={email}
                />
                <Icon name={"mail"} size={18} color={"#f8cb08"} style={styles.form_icon}/>
            </View>

            <View style={styles.register_form_password_area}>
                <TextInput
                    onChangeText={(e)=>setPassword(e)}
                    secureTextEntry={isSecure}
                    style={styles.register_form_password_input}
                    placeholderTextColor={"#606060"}
                    placeholder={"Şifre"}
                    value={password}
                />
                <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
                    <Icon name={!isSecure ? "eye" : "eye-off"} size={18} color={"#f8cb08"} style={styles.form_icon}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.register_button}>
                <Text style={styles.register_button_text}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegisterForm;
