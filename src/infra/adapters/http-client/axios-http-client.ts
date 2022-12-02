/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import {
  HttpRequest,
  HttpResponse,
  HttpClient,
} from '../../../data/protocols/infra'

axios.defaults.validateStatus = () => true

export class AxiosAdapter<T = any> implements HttpClient {
  
  request = async (data: HttpRequest): Promise<HttpResponse> => {
    try {
      const axiosResponse = await axios.request<T>({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: {
          ...data.headers,
          'Content-Type': 'application/json',
        },
      })

      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data,
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: error.response,
      }
    }
  }
}
