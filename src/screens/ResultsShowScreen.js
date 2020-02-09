import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    // Default value of a piece of state that should be an object is null
    // Therefore must catch null in appropriate cases
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    // Helper function to make network request for business details
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    // On first render, must set result equal to id passed from navigation param (But only once!)
    useEffect(() => {
        getResult(id);
    }, []);

    // NULL check if nothing returned from network request 
    // If return is null, make component return null (Implement try catch later on)
    if (!result) {
        return null;
    }     

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    },
});

export default ResultsShowScreen;

/*
NOTES
React Native Stack Navigator sends a bunch of props over to pages defined in navigator with many functions to use for navigation
Need to pass the props.navigate function from the stack navigator to the appropriate component from which navigation can occur 

Arguments passed by navigation.navigate calls accessed by navigation.getParam('')

Photo URLs are unique so they can be used themselves as keys in a flat list
*/