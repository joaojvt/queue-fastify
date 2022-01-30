const { mailQueue } = require("../lib/Queue")
const userModel = require("../model/user-model")

class UserController {
  users

  constructor() {
    this.users = userModel
  }

  async store(req, replay) {
    const user = req.body
    await userModel.save(user)

    await mailQueue.add({ user })

    return replay.code(201).send(user)
  }

  async listAll(req, replay) {
    return userModel.findAll()
  }
}

module.exports = new UserController()