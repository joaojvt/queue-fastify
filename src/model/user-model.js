class UserModel {
  #user = []

  async save(user) {
    this.#user.push(user)
    return user
  }

  async findAll() {
    return this.#user;
  }
}

module.exports = new UserModel()