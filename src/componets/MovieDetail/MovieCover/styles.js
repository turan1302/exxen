import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    gradient_container: {flex: 1, width: "100%", opacity: 0.7},

    image_cover : (position,width,height)=>({
        height : (position==="PORTRAIT") ? height * 0.55 : width * 0.55
    })
})

export default styles;
