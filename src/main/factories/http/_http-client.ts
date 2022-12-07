import { AxiosAdapter } from '@infra/http'

export const makeHttpClient = () => new AxiosAdapter()