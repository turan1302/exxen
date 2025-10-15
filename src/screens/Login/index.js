import React, {useEffect, useState} from 'react'
import {
    Dimensions,
    ImageBackground,
    View,
    ScrollView,
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import LoginForm from "../../componets/Login/LoginForm";
import LoginBar from "../../componets/Login/LoginBar";

const Login = () => {

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
        <ImageBackground style={styles.container} source={require("../../assets/splash/splash.jpg")}>
            <LinearGradient
                colors={["transparent", "#000000"]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0.6}}
                style={styles.gradient_container}
            >
                    {position === "LANDSCAPE" ? (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <LoginBar position={position} width={width} height={height} marginTop={40}/>
                            <LoginForm position={position} width={width} height={height} marginTop={50} marginBottom={20}/>
                        </ScrollView>
                    ) : (
                      <>
                          <LoginBar position={position} width={width} height={height} marginTop={40}/>
                          <View style={styles.login_form_layout}>
                              <LoginForm position={position} width={width} height={height} marginTop={10}/>
                          </View>
                      </>
                    )}
            </LinearGradient>
        </ImageBackground>
    )
}

export default Login;
