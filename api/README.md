<<<<<<< HEAD
# Project2070
A "compliment" to project 2025
=======
# Project2070 API

An Express.js application for fetching and transforming Google Sheets data into a structured JSON format.

## Installation

Clone the repository:
```
git clone <repository-url>
cd project2070
```

Install dependencies:

```
npm install
```

Copy .env.example to .env and fill in the values:
```
SS_ID=spreadsheet id (a unique string of letters and numbers found in the URL after "d/" in the address bar)
SHEET_NAME=name of sheet to use 
```

Place the service-account.json file (Google Cloud service account credentials) in the root directory.

## Usage

Start the app:
```bash
npm start
```

Access the endpoint:

- GET /: Retrieves and transforms Google Sheets data into JSON.

## Project Structure
```
project2070/
├── config/
│   └── index.js             # Application configuration
├── controllers/
│   └── index.js             # Controller for handling requests
├── services/
│   ├── gsheet.js            # Google Sheets API integration
│   └── transformSheet.js    # Data transformation logic
├── .env.example             # Environment variables example file
├── .gitignore               # Files to ignore in Git
├── index.js                 # Application entry point
├── package.json             # Node.js project metadata
├── service-account.json     # Google Cloud service account credentials, should always be git-ignored
```
>>>>>>> 853eb55 (readme update)
