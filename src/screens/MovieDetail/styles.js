import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#26282c"
    },

    detail_container: {
        paddingHorizontal: 10,
        marginVertical: 10
    },
    detail_text: {color: '#aaa', marginTop: 10},

    flatlist_column_style : {
        justifyContent : "space-between",
        marginHorizontal : 10
    },


    image_cover: (position, width, height) => ({
        height: (position === "PORTRAIT") ? height * 0.23 : height * 0.60,
        width: (position === "PORTRAIT") ? width * 0.30 : width * 0.315,
        objectFit : "fill",
        marginBottom : 12,
    })
});

export default styles;
