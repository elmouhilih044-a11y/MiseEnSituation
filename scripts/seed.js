import { Loan } from '../src/models/loan.model.js';
import mongoose from 'mongoose';
import { connectDatabase } from '../src/config/database.js';
import { User } from '../src/models/user.model.js';
import { Equipment } from '../src/models/equipment.model.js';
import { usersFixture, equipmentsFixture, loansFixture } from '../data/fixtures.js';
try {
  await connectDatabase();
  if (mongoose.connection.name !== 'material_mes') throw new Error('Seed reserve a la base pedagogique material_mes.');
  await Promise.all([User.init(), Equipment.init(), Loan.init()]);
  for (const [Model, documents] of [[User, usersFixture()], [Equipment, equipmentsFixture()], [Loan, loansFixture()]]) {
    for (const document of documents) await Model.replaceOne({ _id: document._id }, document, { upsert: true });
  }
  process.stdout.write('Seed recharge : 3 comptes, 5 equipements, 6 prets, sans vider la base.\n');
} finally { await mongoose.disconnect(); }
