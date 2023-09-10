//controllers/users.js
const { encryptId, decryptId } = require("../middleware/encrypt");
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
            const expiresIn = "5m";
            const accessToken = jwt.sign(
              { userData, id: user.id, expiresIn },
              process.env.SECRET_KEY
            );
            // Passwords match, so the user is authenticated
            res
              .status(401)
              .send({ message: "Login Successful", Token: accessToken });
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
  const { username, email, password, role } = req.body;
  if (!isValidEmail(email)) {
    return res.status(422).send({
      message: "Email should be a valid email address",
    });
  }
  const isRegisteredUsername = await UsersMod.findOne({
    where: { username: username },
  });

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
        role: role,
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
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;

    // Check if the user exists
    const user = await UsersMod.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (updatedUserData.email) {
      let email = updatedUserData.email;
      if (!isValid(email)) {
        return res
          .status(422)
          .send({ status: 1002, message: "Email is required" });
      }

      if (!isValidEmail(email)) {
        return res.status(422).send({
          message: "Email should be a valid email address",
        });
      }

      const isSameEmail = await UsersMod.findOne({ where: { email: email } });

      if (isSameEmail) {
        return res.status(422).send({
          message: "This Email-Id is same please enter a new one to update",
        });
      }
    }
    //validate username
    if (updatedUserData.username) {
      let username = updatedUserData.username;
      const isSameUsername = await UsersMod.findOne({
        where: { username: username },
      });

      if (isSameUsername) {
        return res.status(422).send({
          message: "username is same please enter a new one to update",
        });
      }
    }
    // Update user data
    if (updatedUserData.username) {
      user.username = updatedUserData.username;
    }

    if (updatedUserData.email) {
      user.email = updatedUserData.email;
    }

    // Hash and update the password (if provided)
    if (updatedUserData.password) {
      const hashedPassword = await bcrypt.hash(updatedUserData.password, 10);
      user.password = hashedPassword;
    }

    // Save the updated user data to the database
    await user.save();

    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
///////////
const update = async function (req, res, next) {
  try {
    const teacherId = req.params.id;

    if (!isValid(teacherId)) {
      return res.status(422).send({ message: "Teacher-Id is not valid" });
    }

    const enteredID = await UsersMod.findByPk(teacherId);

    if (!enteredID) {
      return res
        .status(422)
        .send({ message: "Provided Teacher-ID does not exists" });
    }

    const data = req.body;

    const { fullName, email, mobile, password, role } = req.body;

    const dataObject = {};

    if (!Object.keys(data).length && typeof files === "undefined") {
      return res
        .status(422)
        .send({ msg: " Please provide some data to update" });
    }

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(422).send({
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
