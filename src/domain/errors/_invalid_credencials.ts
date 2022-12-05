export class InvalidCredentialsError extends Error {
  constructor(message?: string) {
    super('invalid-credentials')
    this.name = 'InvalidCredentialsError'
    this.message =
      message || 'Invalid Credentials'
  }
}
