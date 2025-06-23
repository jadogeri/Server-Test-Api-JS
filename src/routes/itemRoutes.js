const express = require('express')

const router = express.Router();

const {
    createItem,
    removeItem,
    removeItems,
    replaceItem,
    retrieveItem,
    retrieveItems,
    updateItem,
    describeItem
}

= require("../controllers/itemController");

router.post("/",createItem);

router.delete("/:id",removeItem);

router.delete("/",removeItems);

router.put("/:id",replaceItem);

router.get("/:id",retrieveItem);

router.get("/",retrieveItems);

router.patch("/:id",updateItem);

router.head("/",describeItem);


module.exports = router;
