/*  to use this method built-in, must be imported */
const os = require('os'); 

/* returns a string with the os name */
console.log(os.type());

/*returns the path of the home directory */
console.log(os.homedir());

/*returns how much time, the app was being 
executed in seconds*/
console.log(os.uptime());

/*returns the user info*/
console.log(os.userInfo());