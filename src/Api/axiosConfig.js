import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080';

export default axios.create({
  baseUrl: 'https://9c96-103-106-239-104.ap.ngrok.io/',
  headers: {'ngrok-skip-browser-warning': 'true'}
})
