export interface Login {
  execute(params: Login.Params): Promise<Login.Model>
}

export namespace Login {
  export type Params = {
    user: string
    password: string
  }

  export type Model = {
    id: string
    user: string
    name: string
    token: string
  }
}
