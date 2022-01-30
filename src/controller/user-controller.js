const userModel = require("../model/user-model")

class UserController {
  #users

  constructor() {
    this.#users = userModel
  }

  async store(req, replay) {
    const user = req.body
    this.#users.save(user)

    return replay.code(201).send(user)
  }
}

module.exports = new UserController()