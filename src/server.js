import { app } from './app.js';
import { connectDatabase } from './config/database.js';
import { Equipment } from './models/equipment.model.js';
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 24) {
  throw new Error('JWT_SECRET doit contenir au moins 24 caracteres.');
}
await connectDatabase();
await Equipment.init();
const port = Number(process.env.PORT || 3100);
app.listen(port, () => process.stdout.write(`MaterialDesk MES : http://localhost:${port}\n`));
