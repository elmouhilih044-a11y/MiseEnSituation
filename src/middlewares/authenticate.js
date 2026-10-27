import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { User } from '../models/user.model.js';
import { HttpError } from '../shared/http-error.js';
export async function authenticate(req, res, next) {
  const header = req.get('authorization') || '';
  const match = /^Bearer ([^ ]+)$/.exec(header);
  if (!match) throw new HttpError(401, 'AUTH_REQUIRED', 'Token requis.');
  let payload;
  try {
    payload = jwt.verify(match[1], process.env.JWT_SECRET, { algorithms: ['HS256'] });
    if (!payload || !mongoose.isObjectIdOrHexString(payload.sub)) throw new Error();
  } catch {
    throw new HttpError(401, 'AUTH_REQUIRED', 'Token invalide ou expire.');
  }
  const user = await User.findById(payload.sub).lean();
  if (!user || user.isSuspended) throw new HttpError(401, 'AUTH_REQUIRED', 'Compte indisponible.');
  req.user = { id: String(user._id), role: user.role, fullName: user.fullName };
  next();
}
