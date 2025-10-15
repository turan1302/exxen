import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from "./HomeNavigator";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import SearchNavigator from "./SearchNavigator";
import ProfileNavigator from "./ProfileNavigator";
import DownloadNavigator from "./DownloadNavigator";

const Tab = createBottomTabNavigator();

const WelcomeNavigator = () => {
  return (
      <Tab.Navigator initialRouteName={"HomeNavigator"} screenOptions={({ route, navigation }) => {
          return {
              headerShown: false,
              tabBarShowLabel : false,
              tabBarHideOnKeyboard: true,
              tabBarActiveTintColor : "#f8cb08",
              tabBarInactiveTintColor : "#fff",
              tabBarLabelStyle : {
                  fontWeight : "bold",
                  fontSize : 12,
                  marginBottom : 3,
              },
              tabBarIcon : ({focused})=>{
                  let iconName;

                  switch (route.name) {
                      case "HomeNavigator":
                          iconName = "home";
                          break;
                      case "SearchNavigator":
                          iconName = "search";
                          break;
                      case "ProfileNavigator":
                          iconName = "user";
                          break;
                      case "DownloadNavigator":
                          iconName = "download";
                          break;
                      default:
                          iconName = "circle";
                  }

                  return <Feather color={(focused) ? "#f8cb08" : "#fff"} name={iconName} size={25}/>;

              },
              tabBarIconStyle : {
                marginBottom : 10
              },
              tabBarStyle: ((route) => {
                  const tabBarHidden = ["MovieDetail","ProfileNavigator"];


                  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
                  if (tabBarHidden.includes(routeName)) {
                      return { display: "none" }
                  }

                  return {
                      backgroundColor : "#1e1f21",
                      height : 60,
                      borderTopWidth: 0
                  }
              })(route)
          };
      }}>
          <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
          <Tab.Screen name="SearchNavigator" component={SearchNavigator} />
          <Tab.Screen name="DownloadNavigator" component={DownloadNavigator} />
          <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} />
      </Tab.Navigator>
  )
}

export default WelcomeNavigator
