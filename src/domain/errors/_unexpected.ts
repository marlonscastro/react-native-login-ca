export class UnexpectedError extends Error {
  constructor(message?: string) {
    super('unexpected')
    this.name = 'UnexpectedError'
    this.message = message || 'Um erro inesperado aconteceu! Tente novamente.'
  }
}
