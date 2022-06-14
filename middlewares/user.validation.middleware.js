const { user } = require("../models/user");
const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during creation

  //   id: '',
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phoneNumber: '',
  //     password: '' // min 3 symbols
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  if (
    typeof firstName === "string" &&
    firstName.trim().length !== 0 &&
    typeof lastName === "string" &&
    lastName.trim().length !== 0 &&
    email.includes("@gmail.com") &&
    phoneNumber.length === 13 &&
    phoneNumber.startsWith("+380") &&
    typeof password === "string" &&
    password.trim().length >= 3
  ) {
    next();
  } else {
    res.status(401).send("Failed to create user");
  }
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const { firstName, lastName, email, phoneNumber } = req.body;
  if (
    (typeof firstName === "string" && firstName.trim().length !== 0) ||
    (typeof lastName === "string" && lastName.trim().length !== 0) ||
    email.includes("@gmail.com") ||
    (phoneNumber.length === 13 && phoneNumber.startsWith("+380"))
  ) {
    next();
  } else {
    res.status(400).send("Please fill one or more input fields");
  }
};

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
