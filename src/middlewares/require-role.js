import { HttpError, notImplemented } from '../shared/http-error.js';
export function requireRole(...roles) {
  return function checkRole(req, res, next) {
    // MES 1 - TODO 
    throw notImplemented('MES 1 / controle du role');
  };
}
