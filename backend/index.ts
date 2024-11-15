import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import auth from './src/middlewares/auth';


dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.use('/api/protected', auth, (req: Request, res: Response) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
