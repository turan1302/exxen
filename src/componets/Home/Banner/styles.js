import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    bar_container: {
        backgroundColor: "#1f2123",
        paddingTop: 10,
        marginBottom : 10
    },
    bar_top: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-between"
    },
    bar_logo: (position, width, height) => ({
        marginTop: 20,
        width: (position === "PORTRAIT") ? width * 0.35 : height * 0.35,
        height: (position === "PORTRAIT") ? width * 0.10 : height * 0.10,
        objectFit: "fill"
    }),
    bar_right: {
        flexDirection: "row",
        alignItems: "center",
        marginTop : 25
    },

    bookmark_icon_button : {
        marginRight : 25
    }
});

export default styles;
