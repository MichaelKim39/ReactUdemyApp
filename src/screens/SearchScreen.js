import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)} 
                onTermSubmit={() => console.log('Term Submitted')}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;

// NOTES:
// Recall use of state between parents and children:
// Locate state variables inside parent
// Pass callback functions to children which modify state in parent 

// We can implement onTermChange function prop for our searchBar
// onTermChange triggers the callback function to change the value displayed