import { HttpRequest } from '@data/protocols/http/_http-request'
import { HttpResponse } from '@data/protocols/http/_http-response'

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}
