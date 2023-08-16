const User = require("../../models/User")

const userCreate = async () => {

  const user = {
    firstName: "Manu",
    lastName: "Valencia",
    email: "manu10@gmail.com",
    password: "manu1234",
    phone: "+312642"
  }

  await User.create(user)

}

module.exports = userCreate