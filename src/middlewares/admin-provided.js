// FOURNI pour que la MES 2 soit independante de la MES 1.
import { HttpError } from '../shared/http-error.js';
export function adminProvided(req, res, next) {
  if (req.user.role !== 'admin') throw new HttpError(403, 'FORBIDDEN', 'Acces admin requis.');
  next();
}
