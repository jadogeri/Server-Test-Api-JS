const asyncHandler = require('express-async-handler');

/**
 * @description Removes a single Item
 * @route DELETE /api/Item/:id
 * @access private
 */


const removeItem = asyncHandler(async (req, res) => {     

     res.status(200).json({message : `removed item`});
      
});

module.exports = { removeItem }