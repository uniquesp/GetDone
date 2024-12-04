//require library
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost:27017/todo_list_db');

//aquire the connection(to check if it is successfull)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, 'error connectiong to db'));

//up and running them print the msg
db.once('open',function(){
    console.log("Successfully connected to database");

});

module.exports = db;


