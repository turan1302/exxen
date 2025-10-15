import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    login_form_area: {
        backgroundColor: "transparent",
        flex: 0.55,
        position: "relative",
        marginTop: 20,
    },

    login_form_title: {
        color: "white",
        fontWeight: "400",
        fontSize: 22
    },

    login_form_email_area: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#6c6c6c",
        marginTop: 10
    },

    login_form_email_input: {
        marginTop: 5,
        color: "#fff",
        flex: 1,
        marginRight: 5,
        fontWeight: "400",
        fontSize: 15
    },


    // -------------- PASSWORD AREA STYLES

    login_form_password_area: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#6c6c6c",
        marginTop: 13
    },

    login_form_password_input: {
        marginTop: 5,
        color: "#fff",
        flex: 1,
        marginRight: 5,
        fontWeight: "400",
        fontSize: 15
    },


    forget_button_text: {
        alignSelf: "flex-end",
        marginTop: 20,
        color: "#606060"
    },

    social_media_area_text: {
        marginTop: 10,
        color: "#606060"
    },

    social_media_area: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    social_media_google_button: {
        backgroundColor: "#201f21",
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3
    },

    social_media_google_icon: (position, width, height) => ({
        width: (position === "PORTRAIT") ? width * 0.05 : height * 0.05,
        height: (position === "PORTRAIT") ? height * 0.05 : width * 0.05,
    }),

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

    login_button: {
        backgroundColor: "#f8cb08",
        marginTop: 30,
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 5,
    },

    login_button_text: {
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
