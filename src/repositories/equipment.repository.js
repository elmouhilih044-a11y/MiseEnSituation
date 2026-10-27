import { Equipment } from '../models/equipment.model.js';
export const equipmentRepository = {
  async create(data) {
    const equipment = await Equipment.create(data);
    return equipment.toObject();
  },
};
