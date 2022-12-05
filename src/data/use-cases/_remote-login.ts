import { Login } from "../../domain/use-cases/login";
import { HttpClient } from "../protocols/infra";

export class RemoteLogin implements Login {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  execute(params: Login.Params): Promise<Login.Model> {

  }
}