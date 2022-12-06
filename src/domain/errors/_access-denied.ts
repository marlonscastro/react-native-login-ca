export class AccessDeniedError extends Error {
  constructor(message?: string) {
    super('denied-access')
    this.name = 'AccessDeniedError'
    this.message = message || 'Acesso negado ao sistema! Contate o suporte.'
  }
}
