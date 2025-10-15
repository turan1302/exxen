import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Downloads from "../screens/Downloads";

const Stack = createNativeStackNavigator();

const DownloadNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Downloads"} screenOptions={() => {
            return {
                headerShown: false
            }
        }}>
            <Stack.Screen name={"Downloads"} component={Downloads}/>
        </Stack.Navigator>
    )
}

export default DownloadNavigator
