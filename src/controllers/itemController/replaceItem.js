const asyncHandler = require('express-async-handler');

/**
 * @description replace an Item
 * @route PUT /api/Item/
 * @access public
 */


const replaceItem = asyncHandler(async (req, res) => {
    res.status(200).json({message : `replace an Item`});

 });

module.exports = { replaceItem }