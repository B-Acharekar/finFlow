import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import testRoutes from './routes/test.routes.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
const port = (process.env.port || 5001);

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use("/api/test", testRoutes);

connectDB();

app.get('/health', (req, res) => {
  res.json({ status: 'auth-service-ok' });
});

app.listen(port, () => {
  console.log(`Auth service running on ${port}`)
})
