const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error('MONGODB_URI is not defined');
    }

    await mongoose.connect(uri);
    console.log('Connected to the database');
};

module.exports = connectToDatabase;
         