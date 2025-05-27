const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Message = sequelize.define('Message', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  channel: { type: DataTypes.STRING },
  status: { type: DataTypes.INTEGER },
  created_at: { type: DataTypes.DATE },
}, {
  tableName: 'envios',
  timestamps: false
});

module.exports = Message;
