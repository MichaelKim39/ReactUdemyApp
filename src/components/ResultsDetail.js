import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            {/* NB: source written our fully with uri prop (string to locate online resource) */}
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },  
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        // fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ResultsDetail;

/*
NOTES
Images will try and collapse themselves unless set some specific height AND width properties
Recall that default text font size in react native is 14

style={{ marginLeft: 30 }}
Adding margin to parent view doesn't work with scrolling lists - causes cut off
*/