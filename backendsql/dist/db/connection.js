"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('appprueba', 'root', 'Dhrakun_1987', {
    host: 'localhost',
    dialect: 'mysql',
});
exports.default = sequelize;
