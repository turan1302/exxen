import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
   container : {
       paddingHorizontal : 0
   },

    welcome_messages_container : {
        marginTop : 25,
        flexDirection : "row",
        justifyContent : "space-between"
    },

    gradient_container: {flex: 1, width: "100%", justifyContent: "flex-end", opacity: 1, paddingHorizontal: 10,borderRadius : 5},

    flatlist_style : {
        marginTop: 15
    },

    image : (position,width,height,length,index)=>({
        width : (position==="PORTRAIT") ? width * 0.93 : width * 0.46,
        height : (position==="PORTRAIT") ? width * 0.45 : width * 0.23,
        marginRight : (index===length-1) ? 10 : 0,
        marginLeft : (index!==0) ? 10 : 0,
        objectFit  : "fill",
        borderRadius : 5
    }),

    welcome_message_text : {
        color : "#c2c5c7",
        fontWeight : "500",
        fontSize : 20,
        marginTop : 3
    },

    show_all_button_text : {
        color : "#656769",
        marginTop : 5
    },

    play_button_icon : (position,width)=>({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [
            { translateX: (position==="PORTRAIT") ? -(width * 0.10) / 2 : -(width * 0.05) / 2 },
            { translateY: (position==="PORTRAIT") ? -(width * 0.10) / 2 : -(width * 0.05) / 2 }
        ],
    }),

    progressBackground: {
        height: 6,
        width: "106%",
        backgroundColor: "#555", // gri alt bar
        borderRadius: 3,
        overflow: "hidden",
        marginLeft : -10
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#f0d42a", // sarı dolu kısım
    },
});

export default styles;
