import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './welcomescreen';
import LoginScreen from './loginscreen';
import SignupScreen from './signup';
import HomeScreen from './homescreen'; // Import HomeScreen
import CameraScreen from './camera.js'; 

const Stack = createStackNavigator();

const MySplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome'); // Navigate to the Welcome screen
      SplashScreen; // Hide the splash screen
    }, 3000); // Delay in milliseconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/bins.png')}
        style={styles.image}
      />
      <Text style={styles.whiteText}>UG FOUNDIT</Text>
      <Text style={styles.blackText}>find or upload a lost item</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={MySplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130F26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFF', // White color
    fontSize: 55,
  },
  blackText: {
    color: '#FFFF', // White color
    fontSize: 18,
  },
  image: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
  },
});

export default App;
