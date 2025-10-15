import React, {useState} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import categories from "../../../data/categories";

const Categories = () => {
    const [selectedCategory,setSelectedCategory] = useState(1);
    const length = categories.length;

  return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((item,index)=>(
                <TouchableOpacity onPress={()=>{
                    setSelectedCategory(item.id);
                }} style={styles.categoryItem(index,selectedCategory,length)} key={index}>
                    <Text style={styles.categoryItemText(index,selectedCategory)}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
  )
}

export default Categories
