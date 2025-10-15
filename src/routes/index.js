import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../NavigationService';
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Register from "../screens/Register";
import GettingStarted from "../screens/GettingStarted";
import WelcomeNavigator from "./WelcomeNavigator";
import MovieDetail from "../screens/MovieDetail";

const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={'Splash'} screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_right',
            }}>
                <Stack.Screen name={'Splash'} component={Splash}/>
                <Stack.Screen name={'Login'} component={Login}/>
                <Stack.Screen name={'Register'} component={Register}/>
                <Stack.Screen name={'GettingStarted'} component={GettingStarted}/>
                <Stack.Screen name={'WelcomeNavigator'} component={WelcomeNavigator}/>
                <Stack.Screen name={'MovieDetail'} component={MovieDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
