const asyncHandler = require('express-async-handler');

/**
 * @description Update an Item 
 * @route PATCH /api/Item
 * @access public
 */

const updateItem = asyncHandler(async (req, res) => {
   
    res.status(200).json({message : `updated an item`});

});



module.exports = { updateItem }