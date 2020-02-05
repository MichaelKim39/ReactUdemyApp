import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
// Import a particular icon library from vector-icons
// This can be displayed like a react component

const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Search" 
                value={term}
                onChangeText={onTermChange}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    // Can also use hex codes for colour instead of rgb
    backgroundStyle: {
        backgroundColor: '#CFCFCF',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});

export default SearchBar;

// NOTES:
// Using expo CLI to generate app gives us access to many libraries that we typically want to use for mobile apps
// E.g. Vector icons library 

// Icons usually need some styling straight away
// Size prop can be passed instead of using stylesheet 

// Note that alignItems on parent should not be used for text input components
// The input will be squished so user cannot access it by tapping anywhere on parent's flex direction
// Default font size of textInput is 14

// Note that onChangeText for textInput defines a function whose first argument is the new text
    // onChangeText = { newTerm => onTermChange(newTerm) }
// Equivalently can just reference function to call in parent without brackets
    // onChangeText = {onTermChange}

// Note that onEndEditing prop triggers a function after user presses enter on keyboard
