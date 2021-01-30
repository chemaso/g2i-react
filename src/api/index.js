import axios from 'axios'

const g2iInstance = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default g2iInstance
