import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  assetTag: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, enum: ['LAPTOP', 'CAMERA', 'PROJECTOR'], required: true },
  dailyLateFeeCents: { type: Number, required: true, min: 0, validate: Number.isSafeInteger },
  isArchived: { type: Boolean, default: false },
}, { timestamps: true, collection: 'equipments' });
export const Equipment = mongoose.model('Equipment', schema);
