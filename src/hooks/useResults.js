import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Helper function to facilitate API request
    // Recall: Route is concatenated onto baseURL specified in yelp.js
    // Assign response to a variable using async await as requests are asynchronous
    // Use state setter using response from request (data. keyword as accessor)
    // Writing params as second argument of axios calls will append param key value pairs onto the end of our network call
    const searchAPI = async (searchTerm) => {
        console.log('SearchAPI called');
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

    useEffect(() => {
        searchAPI('Pasta');
    }, []);

    return [searchAPI, results, errorMessage];
};

/*
NOTES
Steps to extract business logic into a different file
1. Cut and paste all business logic into file
2. Return the things needed inside original component in an array
3. Change import statements in original file and define a variable for the new hook
4. Now we can re-use code to interact with this API 
*/