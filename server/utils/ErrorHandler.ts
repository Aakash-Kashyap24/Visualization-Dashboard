class ErrorHandler extends Error {
  statusCode: number;
  message: any;

  constructor(statusCode: number, message: any) {
    super(message);
    this.statusCode = statusCode;
    // this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
