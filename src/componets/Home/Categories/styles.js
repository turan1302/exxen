import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        paddingLeft : 10,
        marginTop : 5
    },

    categoryItem : (index,selected,length)=>({
        marginLeft : (index===0) ? 0 : 30,
        borderBottomWidth : (index===selected-1) ? 5 : 0,
        borderColor : "#f8cb08",
        marginRight : (index===length-1) ? 10 : 0
    }),

    categoryItemText : (index,selected)=>({
        color : (index===selected-1) ? "#f8cb08" : "#c2c5c7",
        fontWeight : "500"
    })
});

export default styles;
