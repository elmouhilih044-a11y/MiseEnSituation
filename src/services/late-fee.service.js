// FOURNI POUR MES 3 : ne pas modifier. Fonction pure, sans HTTP ni MongoDB.
import { HttpError } from '../shared/http-error.js';
export function calculateLateFee({ dueAt, returnedAt, dailyFeeCents }) {
  if (!(dueAt instanceof Date) || !(returnedAt instanceof Date)
      || !Number.isFinite(dueAt.getTime()) || !Number.isFinite(returnedAt.getTime())
      || !Number.isSafeInteger(dailyFeeCents) || dailyFeeCents < 0) {
    throw new HttpError(400, 'INVALID_LATE_FEE_INPUT', 'Dates valides et tarif entier positif ou nul requis.');
  }
  const lateDays = Math.ceil(Math.max(0, returnedAt.getTime() - dueAt.getTime()) / 86400000);
  const totalFeeCents = lateDays * dailyFeeCents;
  if (!Number.isSafeInteger(totalFeeCents)) {
    throw new HttpError(400, 'INVALID_LATE_FEE_INPUT', 'Montant hors limite.');
  }
  return { lateDays, totalFeeCents };
}
