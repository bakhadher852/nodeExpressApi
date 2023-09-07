//controllers/users.js
const UsersMod = require("../models/users");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

////////////////////////// -GLOBAL- //////////////////////
const isValid = function (value) {
  if (!value || typeof value != "string" || value.trim().length == 0)
    return false;
  return true;
};

//////////////// -FOR EMPTY BODY- ///////////////////////
const isValidRequestBody = function (requestBody) {
  return Object.keys(requestBody).length > 0;
};

//////////////// -FOR EMAIL- ///////////////////////
const isValidEmail = (email) => {
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
};
/////////////////////List users//////////////////////

exports.listUsers = (req, res) => {
  UsersMod.findAll()
    .then((users) => {
      if (users.length === 0) {
        res.send("No User added yet");
      } else {
        res.json(users);
      }
    })
    .catch((error) => {
      console.error("Error listing users:", error);
      res.status(500).send("Internal server error");
    });
};

////////////////////login user///////////////////////
exports.login = (req, res) => {
  const userData = req.body;
  let { username, password } = userData;

  if (!isValidRequestBody(userData)) {
    return res
      .status(422)
      .send({ message: "Please Provide Username and password" });
  }
  if (!isValid(username)) {
    return res.status(422).send({ message: "Username is required" });
  }

  if (!isValid(password)) {
    return res.status(422).send({ message: "Password is required" });
  }

  UsersMod.findOne({
    where: { username: username },
  })
    .then((user) => {
      if (!user) {
        return res.status(400).send("Username does not exist");
      }

      bcrypt
        .compare(password, user.password)
        .then((password) => {
          if (password) {
            // Passwords match, so the user is authenticated
            res.send("Login Successful");
          } else {
            // Passwords do not match
            res.status(401).send("Password is incorrect");
          }
        })
        .catch((error) => {
          console.error("Error comparing passwords:", error);
          // Handle the error, e.g., by sending an error response
          res.status(500).send("Internal server error");
        });
    })
    .catch((error) => {
      console.error("Error checking username:", error);

      res.status(500).send("Internal server error");
    });
};

///////////////////////SignUp/////////////////////

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!isValidEmail(email)) {
    return res.status(422).send({
      message: "Email should be a valid email address",
    });
  }
  const isRegisteredUsername = await UsersMod.findOne({
    where: { username: username },
  });
  console.log(
    "=====================isRegisteredUsername=======",
    isRegisteredUsername
  );
  const isRegisteredEmail = await UsersMod.findOne({ where: { email: email } });
  if (isRegisteredUsername) {
    return res.status(400).send("Username already exists");
  }
  if (isRegisteredEmail) {
    return res.status(400).send("Email already exists");
  }
  // Hash the password before storing it in the database
  bcrypt
    .hash(password, 10) // You can adjust the number of salt rounds
    .then((hashedPassword) => {
      // Create a new user record in the database
      return UsersMod.create({
        username: username,
        email: email,
        password: hashedPassword,
      });
    })
    .then((user) => {
      // User registration successful
      res.send("User registered successfully");
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      // Handle the error, e.g., by sending an error response
      res.status(500).send("Signup error");
    });
};

//////////////////////////update//////////////////////////////

const updateTeacher = async function (req, res, next) {
  try {
    const teacherId = req.params.id;

    if (!isValid(teacherId)) {
      return res
        .status(422)
        .send({ status: 1003, message: "Teacher-Id is not valid" });
    }

    const enteredID = await UsersMod.findByPk(teacherId);

    if (!enteredID) {
      return res
        .status(422)
        .send({ status: 1006, message: "Provided Teacher-ID does not exists" });
    }

    const data = req.body;

    const { fullName, email, mobile, password, role } = req.body;

    const dataObject = {};

    if (!Object.keys(data).length && typeof files === "undefined") {
      return res
        .status(422)
        .send({ status: 1002, msg: " Please provide some data to update" });
    }

    if ("fullName" in data) {
      if (!isValid(fullName)) {
        return res
          .status(422)
          .send({ status: 1002, message: "Full Name name is required" });
      }

      const isSameFullName = await UsersMod.findOne({
        where: { fullName: fullName },
      });

      if (isSameFullName) {
        return res.status(422).send({
          status: 1008,
          message: "fullname is same please enter a new one to update",
        });
      }

      dataObject["fullName"] = fullName;
    }

    if ("email" in data) {
      if (!isValid(email)) {
        return res
          .status(422)
          .send({ status: 1002, message: "Email is required" });
      }

      if (!isValidEmail(email)) {
        return res.status(422).send({
          status: 1003,
          message: "Email should be a valid email address",
        });
      }

      const isSameEmail = await UsersMod.findOne({ where: { email: email } });

      if (isSameEmail) {
        return res.status(422).send({
          status: 1008,
          message: "This Email-Id is same please enter a new one to update",
        });
      }

      dataObject["email"] = email;
    }

    if ("mobile" in data) {
      if (!isValid(mobile)) {
        return res
          .status(422)
          .send({ status: 1002, message: "Mobile No. is required" });
      }

      if (!isValidMobile(mobile)) {
        return res
          .status(422)
          .send({ status: 1003, message: "Please enter a valid Mobile no" });
      }

      const isSameMobile = await UsersMod.findOne({
        where: { mobile: mobile },
      });

      if (isSameMobile) {
        return res.status(422).send({
          status: 1008,
          message: "The Mobile No. is same please enter a new one to update",
        });
      }

      dataObject["mobile"] = mobile;
    }

    if ("password" in data) {
      if (!isValid(password)) {
        return res
          .status(422)
          .send({ status: 1002, message: "Password is required" });
      }

      if (password.length < 8) {
        return res.status(422).send({
          status: 1003,
          message: "Your password must be at least 8 characters",
        });
      }
      if (password.length > 15) {
        return res.status(422).send({
          status: 1003,
          message: "Password cannot be more than 15 characters",
        });
      }

      dataObject["password"] = password;
    }

    if ("role" in data) {
      if (!isValid(role)) {
        return res
          .status(422)
          .send({ status: 1002, message: "Role is required" });
      }

      if (!(role == "teacher" || role == "Teacher")) {
        return res
          .status(422)
          .send({ status: 1002, message: "Role can be Teacher Only" });
      }

      dataObject["role"] = role;
    }

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(422).send({
      status: 1001,
      msg: "Something went wrong Please check back again",
    });
  }
};

//////////////////////delete user By ID///////////////////////

exports.deleteUser = (req, res) => {
  const userIdToDelete = req.params.id; // Assuming you pass the user ID in the route parameters

  UsersMod.findByPk(userIdToDelete)
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found"); // User not found
      }

      // Delete the user
      user
        .destroy()
        .then(() => {
          res.send("User deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          res.status(500).send("Internal server error");
        });
    })
    .catch((error) => {
      console.error("Error finding user:", error);
      res.status(500).send("Internal server error");
    });
};
