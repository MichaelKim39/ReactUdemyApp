import axios from 'axios';

// Use axios 'directly' to make network requests
// OR setup an instance of axios with some preset options (For code reuse)
export default axios.create({
    // baseURL is the common URL for API requests (Without forward slash) 
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1zGjL49AAFbS15EWSstBhBjhoJMfHhbdI_D_yxp07VJiNYjm6zyGrZgY2JMBTGDimlciRYcTpOEwGsSYCZXeC3i1cI_CNLHslA9vuUSCc3K9wAX2GF8ARWaG-IQ6XnYx'
    }
});


/* NOTES
If we work with multiple APIs, setup a API director
Setup a JS file in which an instance of axios will be written 
Configure it to work with some specific API

Need headers preset with axios instance for API to work 

yelp.get('/search')
*/