import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './Components/HomeScreen'
import WelcomeScreen from './Components/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
