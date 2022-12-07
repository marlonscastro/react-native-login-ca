import { HttpMethod } from "./_http-method"

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}