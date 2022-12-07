import { RemoteLogin } from '../../../data/use-cases'
import { Login } from '../../../domain/use-cases'
import { makeHttpClient } from '../http'

export const makeRemoteLogin = (): Login =>
  new RemoteLogin('', makeHttpClient())
