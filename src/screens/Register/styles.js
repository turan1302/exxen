import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient_container: {flex: 1, width: "100%", justifyContent: "flex-end", opacity: 0.9, paddingHorizontal: 10},

    logo: (position, width, height) => ({
        width: (position === "PORTRAIT") ? height * 0.25 : height * 0.50,
        height: (position === "PORTRAIT") ? width * 0.20 : width * 0.10,
        objectFit: "fill"
    }),



    login_form_layout: {flex: 1, justifyContent: 'flex-end', paddingBottom: 20},
});

export default styles;
