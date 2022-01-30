'use strict'

const userController = require("../controller/user-controller")

module.exports = async function (fastify, opts) {
  fastify.post('/user', userController.store)
}
