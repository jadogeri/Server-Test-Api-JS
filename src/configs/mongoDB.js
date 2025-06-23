const mongoose = require('mongoose');

// Connect to MongoDB locally

const startConnection =()=>{
    // Name your database as shown below
    //const db = 'mongodb://localhost:27017/your_database_name';
    const db = 'mongodb://localhost:27017/';
    mongoose.connect(db, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = { startConnection }
