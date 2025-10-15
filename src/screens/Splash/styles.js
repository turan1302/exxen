import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    gradient_container : { flex: 1,width : "100%",justifyContent : "center",alignItems : "center"},

    logo : (position,width,height)=>({
        width : (position==="PORTRAIT") ? height * 0.25 : height * 0.50,
        height : (position==="PORTRAIT") ? width * 0.20 : width * 0.10,
        objectFit : "fill"
    })

});

export default styles;
