import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        paddingLeft : 10,
        marginTop : 5
    },

    image : (position,width,height,length,index)=>({
        width : (position==="PORTRAIT") ? width * 0.93 : width * 0.46,
        height : (position==="PORTRAIT") ? width * 0.45 : width * 0.23,
        marginRight : (index===length-1) ? 10 : 0,
        marginLeft : (index!==0) ? 10 : 0,
        objectFit  : "fill",
        borderRadius : 5
    })
});

export default styles;
