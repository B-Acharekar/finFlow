import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

connectDB();

app.get('/health', (req, res) => {
  res.json({ status: 'auth-service-ok' });
});

app.listen(process.env.port || port, () => {
  console.log(`Auth service running on ${port}`)
})
