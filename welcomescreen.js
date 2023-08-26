import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    const handleSignUp = () => {
        navigation.navigate('Signup');
    };

    return (
        <ImageBackground
            source={require('./assets/screens.png')} // Replace with your image path
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>WELCOME TO UG FOUNDIT</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 30,
        color: 'white', // Set the text color
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 20,
        paddingHorizontal: 70,
        borderRadius: 8,
        marginVertical: '1%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 60,
    },
});

export default WelcomeScreen;
