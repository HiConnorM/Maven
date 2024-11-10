const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const ContentSchedule = sequelize.define('ContentSchedule', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
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
        defaultValue: 'Pending',
        allowNull: false,
    },
    isPublished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = ContentSchedule;