const Mail = require("../lib/Mail");

module.exports = {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data
    console.log(user);

    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'User created',
      html: `Olá, ${user.name}, Wellcome to queue app :D`
    });
  }
}