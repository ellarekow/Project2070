const dotenv = require('dotenv');
dotenv.config()

const config = {
  port: process.env.PORT || 3001,
  spreadsheetId: process.env.SS_ID,
  range: process.env.SHEET_NAME,
}
module.exports = config