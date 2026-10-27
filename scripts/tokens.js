import jwt from 'jsonwebtoken';
import { ids } from '../data/fixtures.js';
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 24) throw new Error('JWT_SECRET local requis (24 caracteres minimum).');
for (const name of ['admin', 'sara', 'suspended']) {
  const token = jwt.sign({}, process.env.JWT_SECRET, { subject: String(ids[name]), expiresIn: '2h', algorithm: 'HS256' });
  process.stdout.write(`${name}: ${token}\n`);
}
// Outil exclusivement local. Pas de route publique de generation de token.
