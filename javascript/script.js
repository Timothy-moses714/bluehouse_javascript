var user = {
    username: "john",
    password: "mark"
};

var database = [user];

var newsfeed = [
  {
    username: "John Doe",
    timeline: "Just finished my first coding!"
  },
  {
    username: "Jany smith",
    timeline: "Loving the new JavaScript!"
  },
  {
    username: "master",
    timeline: "Debugging is too hard!"
  }
];

/* facebook clone*/
var database = [
  {
    username: "salisu",
    password: "adamu"
  },
  {
    username: "mark",
    password: "12345"
  },
  {
    username: "due",
    password: "111111"
  },
  {
    username: " mark hun",
    password: "556677"
  },
  {
    username: "backard yoe",
    password: "Pass123"
  },
  {
    username: "james bry",
    password: "myPass123"
  }
];

var newsfeed = [
  {
    username: "Tboy",
    timeline: "Javascript is hard"
  },
  {
    username: "John",
    timeline: "hooks and jumps"
  },
  {
    username: "Mark",
    timeline: "it's getting interesting"
  }
];


function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === user && database[i].password === pass) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log("Login successful!");
    console.log(newsfeed);
  } else {
    alert("Wrong username or password");
  }
}

var usernamePrompt = prompt("Enter username:");
var passwordPrompt = prompt("Enter password:");

signIn(usernamePrompt, passwordPrompt);