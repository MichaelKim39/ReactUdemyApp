import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    // Create a state variable to display search term and to extract businesses array from search get request
    // Create a state variable to display error messages
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    // console.log(results);
    // Helper function to filter results by price
    const filterResultsByPrice = (price) => {
        // price == $ || $$ || $$$
        return results.filter(result => {
            return result.price == price;
        });
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>Found {results.length} results</Text> */}

            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective"
                    navigation={navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier"
                    navigation={navigation} 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender"
                    navigation={navigation}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;

/*
NOTES:
Recall use of state between parents and children:
Locate state variables inside parent
Pass callback functions to children which modify state in parent 

We can implement onTermChange function prop for our searchBar
onTermChange triggers the callback function to change the value displayed

API also involves changing piece of data for display - need to use state
Network requests are asynchronous operations
Need a promise or similar code to handle response
Could use .then or async await which is simpler

Use params to pass parameters for network calls
limit: 50 => /search?limit=50
term: term, // Simplify as key and value have same name
term,

Always error handle network requests - especially on mobile devices

Conditional rendering code: 
Wrap in curly braces to reference JS inside JSX
Recall that JS can return JSX code
Use ternary expression

Can never call a function directly inside main component for default API calls
This will usually involve a setter being called inside component and making more API calls than appropriate (Infinite loop)

useEffect from 'react' is a hook (function) that allows us to run some code once component is first rendered to screen (JUST ONCE)
Effect hook allows side effects to occur in function components
useEffect takes 2 arguments, 
    1. Arrow function that runs some amount of times
    2. Some element configuring how often we run the function
    useEffect(() => {}) runs every render
    useEffect(() => {}, []) runs on first render
    useEffect(() => {}, [value]) runs on first render and value change

For smaller devices, wrap JSX contents in a ScrollView which automatically enables scrolling when necessary
PROBLEM: add flex 1 to most parent view to avoid content being cut off 
style={{ flex: 1, borderColor: 'red', borderWidth: 10}}
<View style={{ flex: 1 }}>

Recall that we can only return at most 1 element from a variable by default
BUT we can choose to return NOT an element 
IE replace <View></View> with <></> which works as invisible enclosing element
This by default will forbid elements cutting off prematurely so avoids need to use flex: 1
But beware that cannot add styling this way
*/