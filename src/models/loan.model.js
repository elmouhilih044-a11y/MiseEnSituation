import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  equipmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment', required: true },
  status: { type: String, enum: ['ACTIVE', 'RETURNED', 'CANCELLED'], required: true },
  durationDays: { type: Number, min: 0, default: null },
}, { collection: 'loans' });
// Extrait pedagogique : duree deja calculee pour les prets rendus.
// Aucun calcul de dates ni CRUD de prets demande dans la MES 2.
export const Loan = mongoose.model('Loan', schema);
