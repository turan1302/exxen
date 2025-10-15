import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        padding : 10,
    },

    section_text_container : {
        marginTop : 10,
        marginBottom : 20,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },

    section_left_text : {
        color : "#c2c5c7",
        fontWeight : "500",
        fontSize : 20,
    },

    section_right_text : {
        color : "#979a9b",
    },

    image : (position,width,height,length,index)=>({
        width : (position==="PORTRAIT") ? width * 0.93 : width * 0.46,
        height : (position==="PORTRAIT") ? width * 0.45 : width * 0.22,
        marginRight : (index===length-1) ? 10 : 0,
        marginLeft : (index!==0) ? 10 : 0,
        objectFit  : "fill",
        borderRadius : 5
    })
});

export default styles;
