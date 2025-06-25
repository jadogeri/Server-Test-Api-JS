const asyncHandler = require('express-async-handler');
const Item = require("../../models/itemModel")

/**
 * @description Retrieve a single Item
 * @route GET /api/Item/:id
 * @access private
 */

const retrieveItem = asyncHandler(async (req, res) => {   

   try {
        const id = req.params.id;
        const item = await Item.findById({_id : id})
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
      
});


module.exports = { retrieveItem }