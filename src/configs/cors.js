const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    //origin: 'http://localhost:3100', // Replace with your React app's origin
    // Allow specific methods
    // Allow specific headers
    allowedHeaders: "Content-Type, Authorization",
    credentials: true, // Allow cookies to be sent
}

module.exports = corsOptions;


