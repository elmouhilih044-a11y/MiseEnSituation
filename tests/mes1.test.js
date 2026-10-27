import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { app } from '../src/app.js';
import { Equipment } from '../src/models/equipment.model.js';
import { startDatabase, stopDatabase, token } from './helpers/database.js';
before(startDatabase); after(stopDatabase);
const body = { assetTag: ' lap-099 ', name: ' Portable demo ', category: 'LAPTOP', dailyLateFeeCents: 1000 };
const post = (payload, bearer) => {
  const req = request(app).post('/api/equipments');
  if (bearer) req.set('Authorization', `Bearer ${bearer}`);
  return req.send(payload);
};
test('sans token : 401', async () => {
  assert.equal((await post(body)).status, 401);
});
test('membre : 403 avant validation', async () => {
  assert.equal((await post({}, token('sara'))).status, 403);
});
test('admin : 201 et resultat du service', async () => {
  const res = await post(body, token());
  assert.equal(res.status, 201);
  assert.equal(res.body.data.assetTag, 'LAP-099');
  assert.equal(res.body.data.name, 'Portable demo');
  assert.equal(res.body.data.isArchived, false);
  assert.equal(await Equipment.countDocuments({ assetTag: 'LAP-099' }), 1);
});
test('body invalide : 400, sans creation', async () => {
  const before = await Equipment.countDocuments();
  assert.equal((await post({ ...body, dailyLateFeeCents: -1 }, token())).status, 400);
  assert.equal(await Equipment.countDocuments(), before);
});
test('doublon fourni par le service : 409', async () => {
  const res = await post({ ...body, assetTag: 'LAP-001' }, token());
  assert.equal(res.status, 409);
  assert.equal(res.body.error.code, 'EQUIPMENT_ALREADY_EXISTS');
});
