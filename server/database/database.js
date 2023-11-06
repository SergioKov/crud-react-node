const mongoose = require('mongoose');

const databaseConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('--- Connected to database MONGODB');
    } catch (err) {
        console.log('--- Connection error: ', err);
    }
};

module.exports = databaseConnect;
