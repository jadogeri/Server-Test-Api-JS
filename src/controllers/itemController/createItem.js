const asyncHandler = require('express-async-handler');

/**
 * @description creates an Item
 * @route POST /api/Item/
 * @access public
 */

const createItem = asyncHandler(async (req, res) => {
   
    res.status(200).json({message : `created Item`});

});

module.exports = {createItem}