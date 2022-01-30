class UserModel {
  #user = []

  save(user) {
    this.#user.push(user)
    return user
  }

  findAll() {
    return this.#user;
  }
}

module.exports = new UserModel()