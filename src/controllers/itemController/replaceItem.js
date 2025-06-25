const asyncHandler = require('express-async-handler');
const Item = require("../../models/itemModel")
const mongoose = require('mongoose');

/**
 * @description replace an Item
 * @route PUT /api/Item/
 * @access public
 */


const replaceItem = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const objectId = new mongoose.Types.ObjectId(id)
        const updatedItem = await Item.findOneAndReplace({ _id: objectId },
      { ...req.body },  { new : true } // Return the modified document
    );
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

 });

module.exports = { replaceItem }