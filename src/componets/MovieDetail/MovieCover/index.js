import React from 'react'
import {ImageBackground} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import MovieCoverBar from "./MovieCoverBar";
import MovieInfo from "./MovieInfo";

const MovieCover = ({position, width, height, params}) => {
    return (
        <ImageBackground resizeMode={"fill"} style={styles.image_cover(position, width, height)}
                         source={{uri: params.image}}>
            <LinearGradient
                colors={["transparent", "#000000"]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0}}
                style={styles.gradient_container}
            >
                <MovieCoverBar params={params}/>
                <MovieInfo params={params}/>
            </LinearGradient>
        </ImageBackground>
    )
}

export default MovieCover
