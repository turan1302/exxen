import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#26282c"
    },

    search_container : {
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 20
    },

    result_text : {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20
    },

    flatlist_column_wrapper : {
        justifyContent: "space-between",
        marginHorizontal: 10
    },

    flatlist_empty : {alignSelf: "center", color: "#a3a3a5"},

    image_cover: (position, width, height) => ({
        height: (position === "PORTRAIT") ? height * 0.23 : height * 0.60,
        width: (position === "PORTRAIT") ? width * 0.30 : width * 0.315,
        objectFit : "fill",
        marginBottom : 12,
    })
});

export default styles;
