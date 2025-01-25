const getSpreadsheet = require("../services/gsheet");
const transformSheet = require("../services/transformSheet");

async function sheetDataController(req, res) {
  const raw = await getSpreadsheet();
  const transformed = transformSheet(raw);
  return res.json(transformed);
}

module.exports = sheetDataController;
