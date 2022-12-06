/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes'

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  created = 201,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
  badGateway = 502,
}
export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch'

export type HttpResponse<T = any> = {
  message?: string
  statusCode: StatusCodes
  body?: T
}

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}
