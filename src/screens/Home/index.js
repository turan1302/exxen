import React, {useEffect, useState} from 'react'
import {Dimensions, ScrollView, View} from "react-native";
import styles from "./styles";
import Banner from "../../componets/Home/Banner";
import WelcomeMessage from "../../componets/Home/WelcomeMessage";
import Popular from "../../componets/Home/Popular";
import TodayPopular from "../../componets/Home/TodayPopular";
import ContinueWatching from "../../componets/Home/ContinueWatching";

const Home = () => {

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
        <View style={styles.container}>
            <Banner position={position} width={width} height={height}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <WelcomeMessage/>
                <Popular position={position} width={width} height={height}/>
                <TodayPopular position={position} width={width} height={height}/>
                <ContinueWatching position={position} width={width} height={height}/>
            </ScrollView>
        </View>
    )
}

export default Home
