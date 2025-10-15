import React, {useEffect, useState} from 'react'
import {
    Dimensions,
    ImageBackground,
    View,
    ScrollView,
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import WelcomeText from "../../componets/GettingStarted/WelcomeText";

const GettingStarted = () => {

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
        <ImageBackground style={styles.container} source={require("../../assets/getting_started/seref_bey_dizi.jpg")}>
            <LinearGradient
                colors={["transparent", "#000000"]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0.6}}
                style={styles.gradient_container}
            >


                    {position === "LANDSCAPE" ? (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={[styles.getting_started_layout,{marginTop : 180}]}>
                                <WelcomeText/>
                            </View>
                        </ScrollView>
                    ) : (
                      <>
                          <View style={[styles.getting_started_layout,{justifyContent : "flex-end"}]}>
                             <WelcomeText/>
                          </View>
                      </>
                    )}
            </LinearGradient>
        </ImageBackground>
    )
}

export default GettingStarted;
