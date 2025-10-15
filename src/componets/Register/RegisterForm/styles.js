import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    register_form_area: {
        backgroundColor: "transparent",
        flex: 0.53,
        position: "relative",
        marginTop: 20,
    },

    register_form_title: {
        color: "white",
        fontWeight: "400",
        fontSize: 22
    },

    register_form_name_area: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#6c6c6c",
        marginTop: 10
    },

    register_form_name_input: {
        marginTop: 5,
        color: "#fff",
        flex: 1,
        marginRight: 5,
        fontWeight: "400",
        fontSize: 15
    },

    register_form_surname_area: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#6c6c6c",
        marginTop: 10
    },

    register_form_surname_input: {
        marginTop: 5,
        color: "#fff",
        flex: 1,
        marginRight: 5,
        fontWeight: "400",
        fontSize: 15
    },

    register_form_email_area: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#6c6c6c",
        marginTop: 10
    },

    register_form_email_input: {
        marginTop: 5,
        color: "#fff",
        flex: 1,
        marginRight: 5,
        fontWeight: "400",
        fontSize: 15
    },


    // -------------- PASSWORD AREA STYLES

    register_form_password_area: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#6c6c6c",
        marginTop: 13
    },

    register_form_password_input: {
        marginTop: 5,
        color: "#fff",
        flex: 1,
        marginRight: 5,
        fontWeight: "400",
        fontSize: 15
    },

    social_media_facebook_button: {
        backgroundColor: "#201f21",
        alignSelf: "flex-start",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 3,
        marginLeft: 15
    },

    social_media_facebook_icon: (position, width, height) => ({
        width: (position === "PORTRAIT") ? width * 0.05 : height * 0.05,
        height: (position === "PORTRAIT") ? height * 0.05 : width * 0.05,
    }),

    register_button: {
        backgroundColor: "#f8cb08",
        marginTop: 30,
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 5,
    },

    register_button_text: {
        fontWeight: "bold",
        fontSize: 15
    },

    // FORM ICON
    form_icon: {
        marginRight: 10
    },

    // BAR ICON
    bar_icon: {
        marginLeft: 5,
    },
});

export default styles;
