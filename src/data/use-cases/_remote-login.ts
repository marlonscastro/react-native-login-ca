import { StatusCodes } from "http-status-codes";
import { Login } from "../../domain/use-cases/login";
import { HttpClient } from "../protocols/infra";

export class RemoteLogin implements Login {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  public async execute(params: Login.Params): Promise<Login.Model> {
    const httpResponse  = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: {
        user: params.user,
        password: params.password
      }
    })

      switch (httpResponse.statusCode) {
        case StatusCodes.OK:
          
          break;
      
        default:
          break;
      }

  }
}