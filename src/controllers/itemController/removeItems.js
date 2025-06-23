const asyncHandler = require('express-async-handler');

/**
 * @description Removes all Items
 * @route DELETE /api/item/
 * @access private
 */


const removeItems = asyncHandler(async (req, res) => {           

     res.status(200).json({message : `removed all items`});
      
});

module.exports = { removeItems }