const asyncHandler = require('express-async-handler');

/**
 * @description Retrieve all Objects
 * @route GET /api/Object/
 * @access private
 */

const retrieveObjects = asyncHandler(async (req, res) => {
  // Generate or fetch 100 objects
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            ud: i + 1,
            name: `Object ${i + 1}`,
            value: Math.random() * 100, // Example data
        });
    }   
    
  // Send the array of objects as a JSON response
  res.json(data);
})


module.exports = { retrieveObjects }
