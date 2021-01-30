import axios from 'axios'

// g2iInstance is the initial instance to trigger API calls, it can be intercepted to add configs as auth token
const g2iInstance = axios.create({
  baseURL: 'https://opentdb.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default g2iInstance
