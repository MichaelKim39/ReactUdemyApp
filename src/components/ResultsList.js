import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title} </Text>
            {/* <Text> Results: {results.length} </Text> */}
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator='false'
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }
});

export default ResultsList;

/*
NOTES
Use Touchable Opacity to wrap elements up so onPress prop can be used 
Pass navigation function from defined screens in stack navigator to appropriate sub components
*/