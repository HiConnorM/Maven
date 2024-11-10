import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db'; // Importing the existing sequelize instance

class Appointment extends Model {
  public id!: number;
  public userId!: number;
  public date!: Date;
  public time!: string;
  public type!: string;
}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Use the imported sequelize instance
    modelName: 'Appointment',
  }
);

export default Appointment;
