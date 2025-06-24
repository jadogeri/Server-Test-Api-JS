const asyncHandler = require('express-async-handler');
const Item = require("../../models/itemModel")

/**
 * @description creates an Item
 * @route POST /api/Item/
 * @access public
 */

const createItem = asyncHandler(async (req, res) => {   
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = {createItem}