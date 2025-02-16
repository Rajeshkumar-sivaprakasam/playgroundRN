import axios from 'axios'

// ✅ Create and export a singleton instance of Axios
const axiosInstance = axios.create({
  baseURL: 'your-base-url', // 🔗 Replace with your actual API base URL
  timeout: 10000, // ⏳ Default timeout (10s)
  headers: {
    'Content-Type': 'application/json',
  },
})

// ✅ Request Interceptor
axiosInstance.interceptors.request.use(
  config => {
    console.log('Sending request to:', config.url)
    return config
  },
  error => Promise.reject(error),
)

// ✅ Response Interceptor
axiosInstance.interceptors.response.use(
  response => {
    console.log('Received response from:', response.config.url)
    return response
  },
  error => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  },
)

export default axiosInstance
