import { StatusCodes } from "http-status-codes"

export type HttpResponse<T = any> = {
  message?: string
  statusCode: StatusCodes
  body?: T
}
