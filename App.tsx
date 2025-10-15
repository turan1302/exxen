import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import Routes from "./src/routes";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true}
                       backgroundColor="transparent"
                       barStyle="light-content" />
            <Routes/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App
