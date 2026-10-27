// FOURNI : aucune modification demandee dans cette MES courte.
import { HttpError } from '../shared/http-error.js';

export function validateCreateEquipment(req, res, next) {
  const body = req.body;
  const invalid = () => {
    throw new HttpError(400, 'VALIDATION_ERROR', 'Entree invalide.');
  };
  if (!body || Array.isArray(body) || typeof body !== 'object') invalid();

  const allowed = ['assetTag', 'name', 'category', 'dailyLateFeeCents'];
  if (Object.keys(body).some(key => !allowed.includes(key))) invalid();
  for (const key of ['assetTag', 'name']) {
    if (typeof body[key] !== 'string' || !body[key].trim()) invalid();
  }
  if (!['LAPTOP', 'CAMERA', 'PROJECTOR'].includes(body.category)) invalid();
  if (!Number.isSafeInteger(body.dailyLateFeeCents) || body.dailyLateFeeCents < 0) invalid();

  req.validatedBody = {
    assetTag: body.assetTag,
    name: body.name,
    category: body.category,
    dailyLateFeeCents: body.dailyLateFeeCents,
  };
  next();
}
