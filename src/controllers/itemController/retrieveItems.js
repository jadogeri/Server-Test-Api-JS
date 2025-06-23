const asyncHandler = require('express-async-handler');

/**
 * @description Retrieve all Items
 * @route GET /api/Item/
 * @access private
 */

const retrieveItems = asyncHandler(async (req, res) => {   

     res.status(200).json({message : `Retrieved all items`});
      
});


module.exports = { retrieveItems }