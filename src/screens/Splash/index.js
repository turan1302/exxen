import React, {useEffect, useState} from 'react'
import {Dimensions, Image, ImageBackground} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";

const Splash = (props) => {

    const {navigation} = props;

    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
    const {width, height} = windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    useEffect(() => {
        const dimensionsSubscription = Dimensions.addEventListener('change', handleResize);

        return () => {
            dimensionsSubscription.remove();
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Login");
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleResize = ({window}) => {
        setWindowDimensions(window);
    };

    return (
        <ImageBackground style={styles.container} source={require("../../assets/splash/splash.jpg")}>
            <LinearGradient
                colors={["transparent", "#000000"]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0.9}}
                style={styles.gradient_container}
            >
                <Image style={styles.logo(position,width,height)} source={require("../../assets/logo/logo.png")}/>
            </LinearGradient>
        </ImageBackground>
    )
}

export default Splash
