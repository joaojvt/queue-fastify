require('dotenv').config()
const Queue = require('bull');
const redisConfig = require('../config/redis');
const RegistrationMail = require('../jobs/registration-mail');

const mailQueue = new Queue(RegistrationMail.key, redisConfig)

module.exports = {
  mailQueue
}

