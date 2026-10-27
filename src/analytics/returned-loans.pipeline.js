import { notImplemented } from '../shared/http-error.js';

export function buildReturnedLoansPipeline() {
  // MES 2 : retirer l'echec provisoire et completer les quatre TODO ci-dessous.
  // La jointure, son unwind et le tri final sont fournis.
  return [
    {
      $match:{
        status:"RETURNED"
      }
    },
    { $lookup: { from: 'equipments', localField: 'equipmentId', foreignField: '_id', as: 'equipment' } },
    { $unwind: '$equipment' },
    { /* TODO 2 : equipment.isArchived false */
        $match:{
         "equipment.isArchived": false
      }
     },
    { /* TODO 3 : categorie, returnedCount et averageDurationDays */
      $group:{
        _id:"$equipments.category",
        returnedCount:{$sum:1},
        averageDurationDays:{$avg:"$durationDays"}
      }
     },
    { /* TODO 4 : category, returnedCount, moyenne arrondie, sans _id */ 
      $project:{
        
        category: "$_id",
        returnedCount: 1,
        averageDurationDays:1,
        _id: 0,

      }
    },
    { $sort: { category: 1 } },
  ];
}
