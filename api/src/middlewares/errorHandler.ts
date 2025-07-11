import { Response, Request, NextFunction } from "express";
import ERROR_MESSAGES from "../constants/errorMessages";
import CustomError from "../utils/customError";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log the error stack trace for debugging
    const statusCode = (err instanceof CustomError) ? err.statusCode : 500; // Use custom error status code or default to 500
    res.status(statusCode).json( 
        {
            status: 'error',
            code: statusCode,
            message: statusCode === 500 ? ERROR_MESSAGES.INTERNAL_SERVER_ERROR : err.message,
            error: err.message // Include the error message in the response for debugging purposes
        }
    );
}
export default errorHandler;