import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
    // Return NULL = don't show anything
    if (!results.length) {
        return null;
    }

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
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
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

export default withNavigation(ResultsList);

/*
NOTES

Use Touchable Opacity to wrap elements up so onPress prop can be used 
Pass navigation function from defined screens in stack navigator to appropriate sub components
BUT passing navigation is not required if parent pages don't use navigation in the first place

Use withNavigation helper function which wraps component and returns it with navigation prop inside

NB: can pass arguments in navigate for use in page that is navigated to
*/