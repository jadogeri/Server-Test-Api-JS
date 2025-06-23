const mongoose = require('mongoose');

// Connect to MongoDB locally

const startConnection =()=>{
mongoose.connect('mongodb://localhost:27017/testDB', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));
}

module.exports = { startConnection }
