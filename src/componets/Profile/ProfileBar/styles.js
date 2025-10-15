import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 10,
        backgroundColor : "#1e1f21",
        justifyContent : "center"
    },
    text : {
        color : "#fff",
        fontWeight : "600",
        fontSize : 20,
        marginTop : 40
    },

    profile_bar_container : {
        marginTop: 30,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems : "center"
    },

    profile_bar_container_left_area : {
        flexDirection :"row",
        alignItems : "center"
    },

    profile_bar_account_container : {marginLeft : 10},

    profile_bar_account_name : {
        color : "#fff",
        fontWeight : "500",
        fontSize : 15
    },

    profile_bar_account_email : {
        color : "#5c5c5f"
    },

    image : (position,width,height)=>({
        width : (position==="PORTRAIT") ? width * 0.17 : height * 0.17,
        height : (position==="PORTRAIT") ? width * 0.17 : height * 0.17,
        objectFit  : "fill",
        borderRadius : 5
    })
});

export default styles;
