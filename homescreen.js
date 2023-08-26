import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CameraScreen from './camera.js'; 
import PopupMenu from './popupmenu.js';

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [recentItems, setRecentItems] = useState([
        { image: require('./assets/calcus.jpg'), name: 'Calculator' },
        { image: require('./assets/cadi.jpg'), name: 'Cardigan' },
        { image: require('./assets/keys.jpg'), name: 'Keys' },
        { image: require('./assets/card.jpg'), name: 'ID Card' },
        { image: require('./assets/card1.jpg'), name: 'ID Card' },
        { image: require('./assets/card2.jpg'), name: 'ID Card' },
        { image: require('./assets/card3.jpg'), name: 'ID Card' },
        { image: require('./assets/card4.jpg'), name: 'ID Card' },
        { image: require('./assets/card5.jpg'), name: 'ID Card' },
        { image: require('./assets/card6.jpg'), name: 'ID Card' },
        { image: require('./assets/card7.jpg'), name: 'ID Card' },
        { image: require('./assets/glasses.jpg'), name: 'glasses' },
        { image: require('./assets/glasses2.jpg'), name: 'glasses' },
        { image: require('./assets/glasses3.jpg'), name: 'glasses' },
        { image: require('./assets/glasses5.jpg'), name: 'glasses' },
        { image: require('./assets/keys2.jpg'), name: 'Keys' },
        { image: require('./assets/laptop.jpg'), name: 'laptop' },
        { image: require('./assets/laptop3.jpg'), name: 'laptop' },
        { image: require('./assets/phone.jpg'), name: 'Phone' },
        { image: require('./assets/phone2.jpg'), name: 'Phone' },
        { image: require('./assets/phone5.jpg'), name: 'Phone' },
        { image: require('./assets/phone6.jpg'), name: 'Phone' },

        // Add more items as needed
    ]);

    const [lostItemDescription, setLostItemDescription] = useState('');
    const [lostItemContact, setLostItemContact] = useState('');
    const [lostItemTime, setLostItemTime] = useState('');
    const [lostItemLocation, setLostItemLocation] = useState('');
    const [lostItemError, setLostItemError] = useState('');

    const handleSearch = () => {
        // Perform search using searchQuery and update searchResults
        const results = recentItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchResults(results);
    };

    const handleCamera = () => {
        navigation.navigate('Camera'); 
        // Navigate to camera screen
    };

    const handleProfileUpdate = () => {
        // Navigate to profile update screen
    };

    const handleLostItems = () => {
        // Navigate to lost items screen
    };

    const handleFoundItems = () => {
        // Navigate to found items screen
    };

    const handleContactUs = () => {
        // Navigate to contact us screen
    };

    const handleViewHistory = () => {
        // Navigate to view history screen
    };
    const handleProceed = () => {
        if (!lostItemDescription || !lostItemContact) {
            setLostItemError('Description and contact are required.');
        } else {
            setLostItemError('');
            // Proceed with the submission
            console.log('Lost Item Description:', lostItemDescription);
            console.log('Lost Item Contact:', lostItemContact);
            console.log('Lost Item Time:', lostItemTime);
            console.log('Lost Item Location:', lostItemLocation);
            // Clear the input fields
            setLostItemDescription('');
            setLostItemContact('');
            setLostItemTime('');
            setLostItemLocation('');
        }
    };
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <KeyboardAvoidingView
            behavior='height'
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color="gray" style={styles.notificationIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
                        <Ionicons name="menu-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                <PopupMenu isVisible={isMenuVisible} onClose={toggleMenu} />
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={24} color="gray" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for items..."
                        placeholderTextColor="#fff"
                        onChangeText={text => setSearchQuery(text)}
                        value={searchQuery}
                        onSubmitEditing={handleSearch}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentItemsContainer}>
                    {(searchResults.length > 0 ? searchResults : recentItems).map((item, index) => (
                        <TouchableOpacity key={index} style={styles.recentItemButton}>
                            <Image source={item.image} style={styles.recentItemImage} />
                            <Text style={styles.recentItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.formContainer}>
                    <Text style={styles.formTitle}>Report Lost Item</Text>
                    {lostItemError ? <Text style={styles.errorText}>{lostItemError}</Text> : null}
                    <TextInput
                        style={styles.formInput}
                        placeholder="Description"
                        value={lostItemDescription}
                        onChangeText={setLostItemDescription}
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder="Contact"
                        value={lostItemContact}
                        onChangeText={setLostItemContact}
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder="Time of Loss"
                        value={lostItemTime}
                        onChangeText={setLostItemTime}
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder="Location"
                        value={lostItemLocation}
                        onChangeText={setLostItemLocation}
                    />
                    <TouchableOpacity onPress={handleProceed} style={styles.formButton}>
                        <Text style={styles.buttonText}>Proceed</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomButtonsContainer}>
                    <TouchableOpacity style={styles.bottomButton} onPress={handleLostItems}>
                        <Text style={styles.buttonText}>Lost Items</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomButton} onPress={handleFoundItems}>
                        <Text style={styles.buttonText}>Found Items</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Fixed navigation bar at the bottom */}
            <SafeAreaView style={styles.bottomNavigationBar}>
                <TouchableOpacity style={styles.bottomIcon} onPress={handleCamera}>
                    <Ionicons name="camera-outline" size={30} color="white" />
                    <Text style={styles.iconText}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomIcon} onPress={handleProfileUpdate}>
                    <Ionicons name="person-circle-outline" size={30} color="white" />
                    <Text style={styles.iconText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomIcon} onPress={handleContactUs}>
                    <Ionicons name="mail-outline" size={30} color="white" />
                    <Text style={styles.iconText}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomIcon} onPress={handleViewHistory}>
                    <Ionicons name="time-outline" size={30} color="white" />
                    <Text style={styles.iconText}>History</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>
    

            
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
        paddingBottom: 30
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    notificationIcon: {
        marginRight: 10,
    },
    menuIcon: {},
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 8,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
        color: '#fff'
    },
    searchInput: {
        flex: 1,
        color: 'white',
        paddingVertical: 10,
    },
    searchButton: {
        backgroundColor: '#37474f',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    recentItemsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    recentItemButton: {
        alignItems: 'center',
        marginRight: 15,
    },
    recentItemImage: {
        width: 230,
        height: 170,
        borderRadius: 8,
        marginBottom: 20,
    },
    recentItemText: {
        color: 'white',
        fontSize: 14,
        marginTop: -17,
    },
    bottomButtonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: '150',
    },
    bottomButton: {
        top: -20,
        flex: 1,
        backgroundColor: '#37474f',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginHorizontal: 15,
        marginVertical:10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    bottomNavigationBar: {
        backgroundColor: '#002',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 90,
        marginBottom: -30,
    },
    bottomIcon: {
        alignItems: 'center',
    },
    iconText: {
        color: 'white',
        fontSize: 12,
        marginTop: 2,
    },
    formContainer: {
        top: -10,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        paddingBottom: 10,
    },
    formTitle: {
        fontSize: 20,
        marginBottom: 10,
    },
    formInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    formButton: {
        backgroundColor: '#002',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginTop: 10,
    },
});

export default HomeScreen;
