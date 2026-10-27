// FOURNI
import { getReturnedLoansReport } from '../services/analytics.service.js';
export async function returnedLoansReport(req, res) {
  res.status(200).json({ data: await getReturnedLoansReport() });
}
