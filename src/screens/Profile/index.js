import React, {useEffect, useState} from 'react'
import {Dimensions, View} from "react-native";
import styles from "./styles";
import ProfileBar from "../../componets/Profile/ProfileBar";
import ProfileMenu from "../../componets/Profile/ProfileMenu";

const Search = () => {

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
            <ProfileBar position={position} width={width} height={height}/>
            <ProfileMenu/>
        </View>
    )
}

export default Search
