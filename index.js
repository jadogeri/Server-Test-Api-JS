const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { startConnection } = require("./src/configs/mongoDB");
const { corsOptions } = require("./src/configs/cors");
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5500;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));

//routes
app.use("/api/item", require("./src/routes/itemRoutes"));
app.use("/api/object", require("./src/routes/objectRoutes"));



// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

startConnection();


