import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    // BAR AREA
    bar_container: (marginTop) => ({
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: marginTop
    }),

    bar_logo: (position, width, height) => ({
        width: (position === "PORTRAIT") ? width * 0.30 : height * 0.30,
        height: (position === "PORTRAIT") ? height * 0.06 : width * 0.06,
        objectFit: "fill"
    }),

    bar_navigate_button_area: {
        flexDirection: "row",
        alignItems: "center",
    },

    bar_navigation_button_text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15
    }
});

export default styles;
