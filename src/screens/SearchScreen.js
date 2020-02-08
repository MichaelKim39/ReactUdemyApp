import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    // Create a state variable to display search term and to extract businesses array from search get request
    // Create a state variable to display error messages
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Helper function to facilitate API request
    // Recall: Route is concatenated onto baseURL specified in yelp.js
    // Assign response to a variable using async await as requests are asynchronous
    // Use state setter using response from request (data. keyword as accessor)
    // Writing params as second argument of axios calls will append param key value pairs onto the end of our network call
    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something Went Wrong...');
            // console.log(err);
        }
    };

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Found {results.length} results</Text>
        </View>
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
*/