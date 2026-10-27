import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { app } from '../src/app.js';
import { Loan } from '../src/models/loan.model.js';
import { buildReturnedLoansPipeline } from '../src/analytics/returned-loans.pipeline.js';
import { startDatabase, stopDatabase, token } from './helpers/database.js';
before(startDatabase); after(stopDatabase);
const path = '/api/analytics/returned-loans/by-category';
async function data() {
  const res = await request(app).get(path).set('Authorization', `Bearer ${token()}`);
  assert.equal(res.status, 200);
  return res.body.data;
}
test('les stages du parcours fourni sont conserves', () => {
  const pipeline = buildReturnedLoansPipeline();
  assert.deepEqual(pipeline.map(stage => Object.keys(stage)[0]),
    ['$match', '$lookup', '$unwind', '$match', '$group', '$project', '$sort']);
});
test('jointure, exclusions, compteur et moyenne des prets rendus', async () => {
  assert.deepEqual(await data(), [
    { category: 'CAMERA', returnedCount: 1, averageDurationDays: 2 },
    { category: 'LAPTOP', returnedCount: 2, averageDurationDays: 4 },
  ]);
});
test('aucun pret rendu : tableau vide', async () => {
  await Loan.updateMany({ status: 'RETURNED' }, { $set: { status: 'CANCELLED' } });
  assert.deepEqual(await data(), []);
});
