const asyncHandler = require('express-async-handler');
const Item = require("../../models/itemModel")


/**
 * @description Removes all Items
 * @route DELETE /api/item/
 * @access private
 */


const removeItems = asyncHandler(async (req, res) => {           

     try {
        const deletedItems = await Item.deleteMany();
          if (!deletedItems) return res.status(404).json({ message: 'Item not found' });
        res.json({ message: 'All Items deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
      
});

module.exports = { removeItems }