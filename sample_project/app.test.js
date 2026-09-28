const { add, multiply } = require("./app.js");

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL: ${label} - expected ${expected}, got ${actual}`);
    process.exit(1);
  }
  console.log(`PASS: ${label}`);
}

assertEqual(add(2, 3), 5, "add(2,3) === 5");
assertEqual(multiply(4, 5), 20, "multiply(4,5) === 20");
console.log("All tests passed.");
