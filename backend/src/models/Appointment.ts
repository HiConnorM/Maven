// Appointment.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Appointment extends Model {
  public id!: number;
  public userId!: number;
  public appointmentDate!: Date;
  public notes!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Appointment',
  }
);

export default Appointment;
