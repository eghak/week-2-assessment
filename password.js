const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Welcome! Please enter your password.`, function (answer) {
  if (answer.length >= 10 ) {
   console.log(`success!`) 
  } else {
    console.log(`Failed: your password needs to have at least 10 characters`)
  }  
})
