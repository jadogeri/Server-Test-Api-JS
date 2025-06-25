const asyncHandler = require('express-async-handler');
const Item = require("../../models/itemModel");
const { ObjectId } = require('mongodb');

/**
 * @description Update an Item 
 * @route PATCH /api/Item
 * @access public
 */

const updateItem = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const objectId = new ObjectId(id)
        const updatedItem = await Item.findByIdAndUpdate({ _id: objectId },
      { $set: req.body } , { new : true } // Return the modified document

    );
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }   
});



module.exports = { updateItem }