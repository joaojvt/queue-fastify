const nodemailer = require('nodemailer');
const mailConfig = require('../config/maill');

module.exports = nodemailer.createTransport(mailConfig)