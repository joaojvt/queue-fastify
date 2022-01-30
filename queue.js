require('dotenv').config()

const { mailQueue } = require('./src/lib/Queue')
const RegistrationMail = require('./src/jobs/registration-mail')

mailQueue.process(RegistrationMail.handle)
