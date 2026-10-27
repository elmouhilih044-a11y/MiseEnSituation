import { Loan } from '../models/loan.model.js';
export const analyticsRepository = {
  aggregate(pipeline) { return Loan.aggregate(pipeline).exec(); },
};
