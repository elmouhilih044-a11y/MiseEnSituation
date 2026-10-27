import { test } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { app } from '../src/app.js';
test('healthz fonctionne sans base et sans serveur ouvert par app.js', async () => {
  const response = await request(app).get('/healthz');
  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { status: 'ok' });
});
test('route inconnue : erreur centralisee 404', async () => {
  const response = await request(app).get('/inconnue');
  assert.equal(response.status, 404);
});
test('MES 2 est deja protegee contre une absence de token', async () => {
  const response = await request(app).get('/api/analytics/returned-loans/by-category');
  assert.equal(response.status, 401);
});
