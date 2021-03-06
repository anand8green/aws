import React, { useEffect, useRef } from 'react'
import { Button, StyleSheet, Text, View, Animated, Easing } from 'react-native'

import Video from 'react-native-video';

export default function WelcomeScreen({ navigation }) {

    const top = useRef(new Animated.Value(1)).current
    const op = useRef(new Animated.Value(0.4)).current

    const topTwo = useRef(new Animated.Value(1)).current
    const opTwo = useRef(new Animated.Value(0.4)).current

    useEffect(() => {

        Animated.loop(
            Animated.timing(
                top, {
                toValue: 60,
                duration: 60000,
                useNativeDriver: true,
                easing: Easing.ease
            })
        ).start()

        Animated.loop(Animated.timing(
            op, {
            toValue: 0,
            duration: 60000,
            useNativeDriver: true,
            easing: Easing.ease

        })).start()

        Animated.loop(
            Animated.timing(
                topTwo, {
                toValue: 60,
                delay: 30000,
                duration: 60000,
                useNativeDriver: true,
                easing: Easing.ease

            })
        ).start()

        Animated.loop(Animated.timing(
            opTwo, {
            toValue: 0,
            delay: 30000,
            duration: 60000,
            useNativeDriver: true,
            easing: Easing.ease

        })).start()

    }, [])

    return (
        <View style={styles.box}>
            <Text onPress={() => navigation.navigate("HomeScreen")}
                style={styles.txt}>Home </Text>

            <View style={styles.dot}></View>

            <Animated.View style={[styles.dot, {
                opacity: op,
                transform: [{ scale: top }]
            }]
            } >
            </Animated.View>

            <Animated.View style={[styles.dot, {
                opacity: opTwo,
                transform: [{ scale: topTwo }]
            }]
            } >
            </Animated.View>

        </View>

    )
}

const styles = StyleSheet.create({
    dot: {
        width: 10,
        height: 10,
        backgroundColor: "greenyellow",
        borderRadius: 100,
        position: 'absolute',
        zIndex: 100
    },
    box: {
        flex: 1,
        backgroundColor: "green",
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundVideo: {
        width: '100%',
        height: '100%'
    },
    txt: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 100
    }
});
