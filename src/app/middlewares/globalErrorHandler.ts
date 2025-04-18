import { ErrorRequestHandler } from 'express';
import AppError from '../errors/appError';


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next): void => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorSources = [{ path: '', message: 'Something went wrong' }];


  // Custom AppError
if (err instanceof AppError) {
    statusCode = err.statusCodes || 500;
    message = err.message;
    errorSources = [{ path: '', message }];
  }

  // Built-in or unknown errors
  else if (err instanceof Error) {
    message = err.message;
    errorSources = [{ path: '', message }];
  }

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
//   return;
};

export default globalErrorHandler;
