# Project2070 API

An Express.js application for fetching and transforming Google Sheets data into a structured JSON format.

## Installation

Install dependencies:

```
npm install
```

Copy .env.example to .env and fill in the values:
```
SS_ID=spreadsheet id (a unique string of letters and numbers found in the URL after "d/" in the address bar)
SHEET_NAME=name of sheet to use (SOT) 
```

Place the service-account.json file (Google Cloud service account credentials) in the root of the `api` directory.

## Usage

Start the app without hot-reloading:
```bash
npm start
```

Start the app _with_ hot reloading:
```bash
npm dev
```

Access the endpoint at `localhost:3000`, or whatever other port you configure in the ENV:

- GET /: Retrieves and transforms Google Sheets data into JSON.

## Project Structure
```
project2070/
├── config/
│   └── index.js             # configuration
├── controllers/
│   └── index.js             # Controller for handling requests
├── services/
│   ├── gsheet.js            # Google Sheets API integration
│   └── transformSheet.js    # Data transformation logic
├── .env.example             # Environment variables example file
├── .gitignore               # Files to ignore in Git
├── index.js                 # Express entry point
├── package.json             # Node.js project metadata
├── service-account.json     # Google Cloud service account credentials, should always be git-ignored
```
