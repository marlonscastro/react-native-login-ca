import { Login } from '@presentation/screens'
import React from 'react'
import { makeRemoteLogin } from '@main/factories/use-cases/_remote_login'

export const makeLoginScreen = () => (
  <Login
     login={makeRemoteLogin()}
  />
)
