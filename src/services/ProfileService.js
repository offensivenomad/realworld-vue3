import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/offensivenomad/realworld-vue3/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProfiles() {
    return apiClient.get('/profiles')
  },

  getProfile(id) {
    return apiClient.get('/profiles/' + id)
  },

  getLocations() {
    return apiClient.get('locations')
  },

  getLocation(id) {
    return apiClient.get('/locations' + id)
  }
}
