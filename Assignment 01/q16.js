const crypto = require("crypto");

function findSHA256WithPrefix(prefix, inputString) {
  let hash;
  let counter = 0;

  do {
    hash = crypto
      .createHash("sha256")
      .update(inputString + counter)
      .digest("hex");
    counter++;
  } while (!hash.startsWith(prefix));

  return hash;
}

console.log(findSHA256WithPrefix("00000", "testinput"));
