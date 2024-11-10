import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  logging: false, // disable logging for clean output, can set to true if needed
});

export default sequelize;
