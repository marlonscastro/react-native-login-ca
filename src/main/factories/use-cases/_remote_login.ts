import { RemoteLogin } from '@data/use-cases'
import { Login } from '@domain/use-cases'
import { makeHttpClient } from '@main/factories/http'

export const makeRemoteLogin = (): Login =>
  new RemoteLogin('', makeHttpClient())
