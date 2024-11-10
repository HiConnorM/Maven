import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import User from './User';

// Define the attributes of ContentSchedule
interface ContentScheduleAttributes {
  id?: number; // Optional for auto-incremented fields
  userId: number;
  content: string;
  platform: string;
  scheduledDate: Date;
  approvalStatus?: string; // Optional with default value
  isPublished?: boolean; // Optional with default value
}

// Interface for creating a new ContentSchedule instance
interface ContentScheduleCreationAttributes extends Optional<ContentScheduleAttributes, 'id' | 'approvalStatus' | 'isPublished'> {}

// Define the ContentSchedule model
class ContentSchedule extends Model<ContentScheduleAttributes, ContentScheduleCreationAttributes> implements ContentScheduleAttributes {
  public id!: number;
  public userId!: number;
  public content!: string;
  public platform!: string;
  public scheduledDate!: Date;
  public approvalStatus!: string;
  public isPublished!: boolean;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ContentSchedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scheduledDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    approvalStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pending',
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'ContentSchedule',
  }
);

export default ContentSchedule;
