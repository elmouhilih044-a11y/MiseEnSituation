import { equipmentRepository } from '../repositories/equipment.repository.js';
import { HttpError, notImplemented } from '../shared/http-error.js';

export async function createEquipment(input) {
  try {
    // MES 1 - TODO : construire les donnees metier :
    // assetTag nettoye et en majuscules, name nettoye,
    // category et dailyLateFeeCents conserves, isArchived force a false.
    throw notImplemented('MES 1 / preparation et creation equipement');
  } catch (error) {
    // FOURNI : la gestion technique de l'unicite n'est pas a reecrire.
    if (error.code === 11000 && error.keyPattern?.assetTag) {
      throw new HttpError(409, 'EQUIPMENT_ALREADY_EXISTS', 'Ce code existe deja.');
    }
    throw error;
  }
}
