import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.box}>
            <View style={styles.boxIn}>
                <Text style={styles.txt}>HomeScreen</Text>
            </View>
            <Button title="Welcome" onPress={() => navigation.navigate("WelcomeScreen")} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "purple"
    },
    boxIn: {
        backgroundColor: "gold",
        padding: 50,
        borderRadius: 40,
        shadowColor: 'black',
        shadowRadius: 100,
        shadowOpacity: 0.8,
        elevation: 40,
    },

    txt: {
        fontSize: 40,
        textShadowColor: 'red',
    }
})
