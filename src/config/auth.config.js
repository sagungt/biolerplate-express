require('dotenv').config();

const secret = process.env.JWT_SECRET;

module.exports = { secret };
