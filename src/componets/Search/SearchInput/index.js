import React, {useState} from 'react'
import {TextInput, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";

const SearchInput = (props) => {

    const {setSearch, search} = props;
    const [searchText,setSearchText] = useState(search);

    return (
        <View style={styles.container}>
            <TextInput onChangeText={(e) => {
                setSearchText(e);
            }} style={styles.input_style} value={searchText} numberOfLines={1} multiline={false} placeholder={"Örn: Gibi"}
                       placeholderTextColor={"#9e9da1"}/>
            <TouchableOpacity onPress={()=>{
                setSearch(searchText);
            }}>
                <Feather name={"search"} size={20} color={"#ddca46"}/>
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput
