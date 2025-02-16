import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import axiosInstance from '@shared/utils/axiosInstance' // ✅ Import the singleton instance

const useAxios = () => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const source = axios.CancelToken.source()
    return () => source.cancel('Component unmounted: Request cancelled.')
  }, [])

  // 📌 API Call Function (Supports Custom Headers & Timeout)
  const fetchData = async ({
    url,
    method = 'GET',
    data = {},
    headers = {},
    timeout = 10000,
  }: {
    url: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    headers?: any
    timeout?: number
  }) => {
    setLoading(true)

    try {
      const config: AxiosRequestConfig = {
        url,
        method,
        data: method !== 'GET' ? data : undefined,
        params: method === 'GET' ? data : undefined,
        headers: { ...axiosInstance.defaults.headers, ...headers },
        timeout: timeout || axiosInstance.defaults.timeout,
      }

      const result = await axiosInstance(config)
      setResponse(result.data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response ? err.response.data : err.message)
    } finally {
      setLoading(false)
    }
  }

  return { response, error, loading, fetchData }
}

export default useAxios
