import { StatusCodes } from "http-status-codes";
import { AccessDeniedError, InvalidCredentialsError, UnexpectedError } from "@domain/errors";
import { Login } from "@domain/use-cases/login";
import { HttpMethod } from "@data/protocols/http";
import { HttpClient } from "@data/protocols/infra";
export class RemoteLogin implements Login {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  public async execute(params: Login.Params): Promise<Login.Model> {
    return new Promise<any>((res, rej) => {
      setTimeout(() => {
        res({
          email: 'marloncastro@wedsys.com.br',
          name: 'Marlon Castro',
          token: 'token-jwt' 
        })
      }, 2000)
    })
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: HttpMethod.POST,
      body: {
        user: params.user,
        password: params.password
      }
    })

    switch (httpResponse.statusCode) {
      case StatusCodes.OK:
        return {
          ...httpResponse.body,
          token: httpResponse.body.token
        };
      case StatusCodes.BAD_REQUEST:
      case StatusCodes.UNAUTHORIZED:
        throw new InvalidCredentialsError(httpResponse.message)
      case StatusCodes.FORBIDDEN:
        throw new AccessDeniedError(httpResponse.message)
      default:
        throw new UnexpectedError(httpResponse.message)
    }
  }
}