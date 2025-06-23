const asyncHandler = require('express-async-handler');

/**
 * @description Retrieve a single Item
 * @route GET /api/Item/:id
 * @access private
 */

const retrieveItem = asyncHandler(async (req, res) => {   

     res.status(200).json({message : `Retrieved a single item`});
      
});


module.exports = { retrieveItem }