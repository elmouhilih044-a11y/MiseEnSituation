import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'member'], required: true },
  isSuspended: { type: Boolean, default: false },
}, { timestamps: true, collection: 'users' });
export const User = mongoose.model('User', schema);
