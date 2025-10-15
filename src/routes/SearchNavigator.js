import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
      <Stack.Navigator initialRouteName={"Search"} screenOptions={()=>{
          return {
              headerShown : false
          }
      }}>
          <Stack.Screen name={"Search"} component={Search}/>
      </Stack.Navigator>
  )
}

export default SearchNavigator
