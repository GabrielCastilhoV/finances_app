import axios from 'axios'

const api = axios.create({
  baseURL: 'https://finances-api-unisl.herokuapp.com'
})

export default api