import _axios from 'axios';

const {
  baseURL = 'http://localhost:8080',
} = process.env;

export const axios = _axios.create({
  baseURL,
})
