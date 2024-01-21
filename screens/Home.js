import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Home({ route, navigation }) {

    const handlePress = () => {
        navigation.replace("Settings", {
            test: "Hello World",
            dontDoThis: () => {
                console.log('FUnction from Home')
            }
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>Navigate to Notification</Text>
            </TouchableOpacity>
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

export default Home