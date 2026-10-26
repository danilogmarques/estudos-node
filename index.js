const { Person } = require('./person');

// require('./modules/http');

require('./modules/express');

const person = new Person('John Doe');  

console.log(person.sayMyName());   