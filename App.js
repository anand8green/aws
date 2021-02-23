import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './Components/HomeScreen'
import WelcomeScreen from './Components/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import config from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import awsconfig from './aws-exports';
import { getUser } from './graphql/queries'
import { createUser } from './graphql/mutations';

Amplify.configure(config)
Amplify.configure(awsconfig);

function App() {

  const Stack = createStackNavigator();

  useEffect(() => {

    const fethUser = async () => {
      // If there is user loged in
      const checkUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
      const id = checkUser.attributes.sub
      // Checking if that user data is inside db or not

      const checkDB = await API.graphql(graphqlOperation(getUser, { id: id }))

      if (checkDB.data.getUser) {
        console.log("user exit in DB")
      }
      const newUser = {
        id: id,
        name: checkUser.username
      }
      await API.graphql(graphqlOperation(createUser, { input: newUser }))

    }

    fethUser()

  }, [])

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

export default withAuthenticator(App)