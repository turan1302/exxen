import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#26282c",
    },

    title_container : {
        marginVertical : 20,
        flexDirection : "row",
        alignItems : "center"
    },

    title_text : {
        color : "#f2f3f4",
        fontSize : 19
    },

    count_text : {
        color : "#8f8f8f",
        fontSize : 12,
        marginLeft : 10,
        alignSelf : "flex-end"
    },


    movie_button_style : {
        marginBottom : 30,
        flexDirection : "row",
    },

    movie_name_style : {
        flex : 1,
        fontWeight : "500",
        color : "#ebedef",
        fontSize : 20,
    },

    image : (position,width,height)=>({
        width : (position==="PORTRAIT") ? width * 0.50 : width * 0.46,
        height : (position==="PORTRAIT") ? width * 0.30 : width * 0.22,
        objectFit  : "fill",
        borderRadius : 5,
        marginRight : 10
    })
});

export default styles;
