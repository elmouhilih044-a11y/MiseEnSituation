export function errorHandler(error, req, res, next) {
  if (res.headersSent) return next(error);
  const status = error.type === 'entity.parse.failed' ? 400 : error.status || 500;
  res.status(status).json({ error: {
    code: status === 400 && !error.code ? 'VALIDATION_ERROR' : error.code || 'INTERNAL_ERROR',
    message: status >= 500 && status !== 501 ? 'Erreur interne.' : error.message,
  } });
}
