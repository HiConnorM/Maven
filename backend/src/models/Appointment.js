const { DataTypes } = require('sequelize');
   const sequelize = require('../config/database');
   const User = require('./User');

   const Appointment = sequelize.define('Appointment', {
       userId: {
           type: DataTypes.INTEGER,
           allowNull: false,
           references: {
               model: User,
               key: 'id'
           }
       },
       date: {
           type: DataTypes.DATE,
           allowNull: false
       },
       time: {
           type: DataTypes.STRING,
           allowNull: false
       },
       type: {
           type: DataTypes.STRING,
           allowNull: false
       }
   });

   module.exports = Appointment;