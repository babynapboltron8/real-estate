export class BadRequestException extends Error {
  constructor (message, data) {
    super(message)
    this.name = 'Bad Request Error'
    this.data = data
  }
}

export class InternalServerException extends Error {
  constructor (message, data) {
    super(message)
    this.name = 'Internal Server Error'
    this.data = data
  }
}
