"use strict";

const { Sequelize } = require("sequelize");

const db = {};

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    dialectOptions: {
      socketPath: process.env.SOCKET || ''
    },
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.client = require("../server/models/client.model")(
  sequelize,
  Sequelize
)

module.exports = db
