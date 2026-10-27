const { Person } = require('./person');
require('dotenv').config();

const connectToDatabase = require('./src/database/connect');

connectToDatabase().catch((error) => {
    console.error('Error connecting to the database:', error.message);
    process.exitCode = 1;
});


// require('./modules/http');

// require('./modules/express');

// const person = new Person('John Doe');  

// console.log(person.sayMyName());   