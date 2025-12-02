import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from '../config/db';

dotenv.config();
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/health', (req, res) => {
  res.json({ status: 'auth-service-ok' });
});

app.listen(process.env.port || port, () => {
  console.log(`Auth service running on ${port}`)
})
