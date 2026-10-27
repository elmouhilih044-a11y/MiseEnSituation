import mongoose from 'mongoose';
const id = n => new mongoose.Types.ObjectId(n.toString(16).padStart(24, '0'));
export const ids = { admin: id(1), sara: id(2), suspended: id(3) };
export function usersFixture() {
  return [
    { _id: ids.admin, fullName: 'Admin Materiel', email: 'admin@mes.test', role: 'admin' },
    { _id: ids.sara, fullName: 'Sara Amrani', email: 'sara@mes.test', role: 'member' },
    { _id: ids.suspended, fullName: 'Compte Suspendu', email: 'suspendu@mes.test', role: 'member', isSuspended: true },
  ];
}
export function equipmentsFixture() {
  return [
    { _id: id(11), assetTag: 'LAP-001', name: 'Portable 1', category: 'LAPTOP', dailyLateFeeCents: 1000 },
    { _id: id(12), assetTag: 'LAP-002', name: 'Portable 2', category: 'LAPTOP', dailyLateFeeCents: 1000 },
    { _id: id(13), assetTag: 'CAM-001', name: 'Camera', category: 'CAMERA', dailyLateFeeCents: 1500 },
    { _id: id(14), assetTag: 'PRO-001', name: 'Projecteur', category: 'PROJECTOR', dailyLateFeeCents: 2000 },
    { _id: id(15), assetTag: 'LAP-OLD', name: 'Archive', category: 'LAPTOP', dailyLateFeeCents: 1000, isArchived: true },
  ];
}

export function loansFixture() {
  const id = n => new mongoose.Types.ObjectId(n.toString(16).padStart(24, '0'));
  return [
    { _id: id(101), equipmentId: id(11), status: 'RETURNED', durationDays: 3 },
    { _id: id(102), equipmentId: id(12), status: 'RETURNED', durationDays: 5 },
    { _id: id(103), equipmentId: id(13), status: 'RETURNED', durationDays: 2 },
    { _id: id(104), equipmentId: id(11), status: 'ACTIVE', durationDays: null },
    { _id: id(105), equipmentId: id(13), status: 'CANCELLED', durationDays: null },
    { _id: id(106), equipmentId: id(15), status: 'RETURNED', durationDays: 30 },
  ];
}
