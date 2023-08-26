import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PopupMenu = ({ isVisible, onClose }) => {
    if (!isVisible) {
        return null;
    }

    const handleLogout = () => {
        // Implement logout logic
        onClose(); // Close the popup menu after action
    };

    const handleProfile = () => {
        // Implement profile navigation
        onClose(); // Close the popup menu after action
    };

    // Add more handlers for other menu options

    return (
        <View style={[styles.container, { zIndex: 1 }]}>
            <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
                <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
            {/* Add more menu items as needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60, // Adjust as needed
        right: 20, // Adjust as needed
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        elevation: 5, // Add elevation for shadow
    },
    menuItem: {
        padding: 8,
    },
    menuText: {
        fontSize: 16,
    },
});

export default PopupMenu;
