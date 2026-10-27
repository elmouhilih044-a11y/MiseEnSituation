import { Loan } from '../../src/models/loan.model.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { User } from '../../src/models/user.model.js';
import { Equipment } from '../../src/models/equipment.model.js';
import { usersFixture, equipmentsFixture, loansFixture, ids } from '../../data/fixtures.js';
let mongo;
export async function startDatabase() {
  process.env.JWT_SECRET = 'material-mes-test-only-secret-not-for-production';
  mongo = await MongoMemoryServer.create({ binary: { version: '7.0.24' } });
  await mongoose.connect(mongo.getUri('material_mes_tests'));
  await Promise.all([User.init(), Equipment.init(), Loan.init()]);
  await User.insertMany(usersFixture());
  await Equipment.insertMany(equipmentsFixture());
  await Loan.insertMany(loansFixture());
}
export async function stopDatabase() {
  await mongoose.disconnect();
  if (mongo) await mongo.stop();
}
export function token(name = 'admin', expiresIn = '1h') {
  return jwt.sign({}, process.env.JWT_SECRET, { subject: String(ids[name]), algorithm: 'HS256', expiresIn });
}
