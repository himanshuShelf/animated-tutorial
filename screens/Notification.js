import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Notification() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notification</Text>
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

export default Notification