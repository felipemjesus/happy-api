import { ErrorRequestHandler } from 'express';
import fs from 'fs';
import path from 'path';

const errorHandler: ErrorRequestHandler =  (error, request, response, next) => {
  console.error(error);

  const fileName = `${Date.now()}-error.log`;
  const fileLog = path.join(__dirname, '..', '..', 'storage', 'logs', fileName);

  fs.writeFile(fileLog, error, console.log);

  return response.status(500).json({ message: 'Internal server error' })
};

export default errorHandler;
