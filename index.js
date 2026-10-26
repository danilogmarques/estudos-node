const { Person } = require('./person');
const dotenv = require('dotenv');
const conectToDatabase = require('./src/database/connect');

dotenv.config();

conectToDatabase();


// require('./modules/http');

// require('./modules/express');

// const person = new Person('John Doe');  

// console.log(person.sayMyName());   