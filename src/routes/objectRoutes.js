const express = require('express')

const router = express.Router();

const {
   
    retrieveObject,
    retrieveObjects,

}

= require("../controllers/objectController");

router.get("/:id", retrieveObject );

router.get("/",retrieveObjects);

module.exports = router;
