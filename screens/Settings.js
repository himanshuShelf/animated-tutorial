import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Settings({ route }) {

    console.log(route?.params)

    const textFromHome = route?.params?.test;
    const fnFromHome = route?.params?.dontDoThis;

    console.log(textFromHome)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{textFromHome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A1A",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: "white"
    }
})

export default Settings