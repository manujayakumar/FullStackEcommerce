class CustomError extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.name = 'CustomError';
  }
}

export default CustomError;