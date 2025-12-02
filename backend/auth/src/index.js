import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 5001;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'auth-service-ok' });
});

app.listen(process.env.port || port, () => {
  console.log(`Auth service running on ${port}`)
})
