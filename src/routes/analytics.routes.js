// FOURNI : independant du middleware a ecrire pour la MES 1.
import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { adminProvided } from '../middlewares/admin-provided.js';
import { returnedLoansReport } from '../controllers/analytics.controller.js';
import { asyncHandler } from '../shared/async-handler.js';
export const analyticsRouter = Router();
analyticsRouter.get('/returned-loans/by-category', asyncHandler(authenticate),
  adminProvided, asyncHandler(returnedLoansReport));
