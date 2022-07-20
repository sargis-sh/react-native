import axios from 'axios';

const json = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default json;