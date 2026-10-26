const mongoose = require('mongoose');

const conectToDatabase =async () => {  
    await mongoose.connect(
        `mongodb+srv://danilogustavomarques_db_user:${process.env.DB_PASSWORD}@cursonodejsdicasparadev.gelrqvk.mongodb.net/${process.env.DB_NAME}`, (error)=> {
        if (error) {
            console.log('Error connecting to the database:', error);
        }  
        return console.log('Connected to the database');
    });
};

module.exports = conectToDatabase;
         