var user = {
    username: "John Mark",
    password: "myPass123",
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
        password: "it's geeting interesting"
    },
];
var usernameprompt = prompt("username");
var passwordprompt = prompt("password");
function signIn(user, pass){
    if (user === database.username && pass === database[0].password){
        console.log(newsfeed);

    } else {
        alert("wrong details")
    }
};
signIn(usernameprompt, passwordprompt);