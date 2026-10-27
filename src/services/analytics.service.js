// FOURNI
import { analyticsRepository } from '../repositories/analytics.repository.js';
import { buildReturnedLoansPipeline } from '../analytics/returned-loans.pipeline.js';
export function getReturnedLoansReport() {
  return analyticsRepository.aggregate(buildReturnedLoansPipeline());
}
