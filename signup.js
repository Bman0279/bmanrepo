import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async () => {
        if (!username || !email || !password) {
            setErrorMessage('All fields are required');
        } else {
            setErrorMessage('');

            const user = { username, email, password };

            try {
                await AsyncStorage.setItem('user', JSON.stringify(user));
                console.log('User details saved:', user);
                navigation.navigate('Login'); // Navigate to the login screen
            } catch (error) {
                console.error('Error saving user details:', error);
            }
        }
    };

    return (
        <ImageBackground
            source={require('./assets/screens.png')} // Replace with your image path
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={handleSignUp} style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Already have an account? Log in</Text>
                </TouchableOpacity>
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
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        color: 'white', // Set the text color
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        color: 'white', // Set the text color
    },
    input: {
        width: 250,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white', // Set the input background color
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    loginText: {
        color: '#3498db',
        fontSize: 14,
        marginTop: 10,
    },
});

export default SignupScreen;
