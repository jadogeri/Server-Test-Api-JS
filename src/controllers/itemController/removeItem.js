const asyncHandler = require('express-async-handler');
const Item = require("../../models/itemModel")


/**
 * @description Removes a single Item
 * @route DELETE /api/Item/:id
 * @access private
 */


const removeItem = asyncHandler(async (req, res) => {     

    try {
        const id = req.params.id
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
      
});

module.exports = { removeItem }