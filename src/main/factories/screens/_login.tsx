import { Login } from '../../../presentation/screens'
import React from 'react'
import { RemoteLogin } from '../../../data/use-cases'

export const makeLoginScreen = () => (
  <SignInScreen
    ebic={makeRemoteEBICAuthentication()}
    ldap={makeRemoteLDAPAuthentication()}
  />
)
