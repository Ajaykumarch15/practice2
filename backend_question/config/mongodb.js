const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/authdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('🔥 MongoDB Connected!');
    } catch (error) {
        console.error('❌ MongoDB Connection Failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
