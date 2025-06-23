const asyncHandler = require('express-async-handler');

/**
 * @description describes an Item
 * @route HEAD /api/Item/
 * @access public
 */

const describeItem = asyncHandler(async (req, res) => {
   
    res.status(200).json({message : `describes an Item`});

});

module.exports = {describeItem}