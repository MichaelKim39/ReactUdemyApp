import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsShowScreen = () => {
    return (
        <View>
            <Text>Results Show Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;

/*
NOTES
React Native Stack Navigator sends a bunch of props over to pages defined in navigator with many functions to use for navigation
Need to pass the props.navigate function from the stack navigator to the appropriate component from which navigation can occur 
*/