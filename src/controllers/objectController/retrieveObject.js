
const asyncHandler = require('express-async-handler');

/**
 * @description Retrieve a single Object
 * @route GET /api/Object/
 * @access private
 */

const retrieveObject = asyncHandler(async(req, res) => {
  // Generate or fetch 100 objects
  const id = req.params.id
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      id: i + 1,
      name: `Object ${i + 1}`,
      value: Math.random() * 100, // Example data
    });
  }

  // Send the array of objects as a JSON response
  const result = data[id - 1]
  res.json(result);
});


module.exports = { retrieveObject }
