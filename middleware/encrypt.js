const crypto = require("crypto");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

// Function to encrypt the ID
exports.encryptId = function (id) {
  const algorithm = "aes-256-cbc";
  const key = crypto.scryptSync(secretKey, "salt", 32); // Derive a key from secretKey
  const iv = Buffer.alloc(16, 0); // Initialization vector, you may want to generate a random one

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encryptedId = cipher.update(id.toString(), "utf8", "hex");
  encryptedId += cipher.final("hex");
  return encryptedId;
};

// Function to decrypt the ID
exports.decryptId = function (encryptedId) {
  const algorithm = "aes-256-cbc";
  const key = crypto.scryptSync(secretKey, "salt", 32); // Derive a key from secretKey
  const iv = Buffer.alloc(16, 0); // Initialization vector, should be the same one used for encryption

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decryptedId = decipher.update(encryptedId, "hex", "utf8");
  decryptedId += decipher.final("utf8");
  return decryptedId;
};
