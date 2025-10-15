import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        margin: 10
    },
    movie_name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 27,
        marginBottom: 10
    },
    movie_name_desc: {
        color: "#c7c3c3"
    },

    movie_duration_container : {
        flexDirection : "row",
        alignItems : "center"
    },

    movie_hd_text_container : {
        marginLeft : 7,
        borderWidth : 1,
        borderColor : "#c7c3c3",
        paddingHorizontal : 2
    },

    movie_hd_text : {
        color: "#c7c3c3"
    },

    movie_categories_container : {
        marginTop : 7,
        flexDirection : "row"
    },

    movie_category_text : {
        color : "#c7c3c3",
        fontWeight : "400"
    },

    movie_release_year_text : {
        color : "#c7c3c3",
        fontWeight : "400"
    },

    button_container: {
        flexDirection: "row",
        marginVertical: 10
    },

    left_button: {
        alignItems: "center",
        justifyContent : "center",
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        alignSelf: "flex-start",
        borderColor: "#d2d2d2",
        padding: 10,
        borderRadius: 5,
    },
    left_button_text : {
        color: "#fff",
        fontWeight: "bold",
        marginLeft : 5
    },

    right_button: {
        backgroundColor: "#f8cb08",
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        alignSelf: "flex-start",
        borderColor: "#f8cb08",
        padding: 10,
        borderRadius: 5,
    },
    right_button_text: {
        color: "#000",
        fontWeight: "bold",
        marginLeft : 5
    }
});

export default styles;
