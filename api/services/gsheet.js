const { google } = require("googleapis");
const path = require("path");
const config = require("../config");

// Load the credentials JSON file
const credentialsPath = path.join(__dirname, "../service-account.json"); // assumes service-acount.json is at the root

async function getSpreadsheet() {
  const { spreadsheetId, range } = config;
  
  // Authenticate using the service account
  const auth = new google.auth.GoogleAuth({
    keyFile: credentialsPath,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  return response.data.values;
}

module.exports = getSpreadsheet;
