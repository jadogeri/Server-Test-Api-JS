const asyncHandler = require('express-async-handler');
const Item = require("../../models/itemModel")


/**
 * @description Retrieve all Items
 * @route GET /api/Item/
 * @access private
 */

const retrieveItems = asyncHandler(async (req, res) => {   
   try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
      
});


module.exports = { retrieveItems }