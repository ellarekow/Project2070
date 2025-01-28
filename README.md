# Project2070
A response to project 2025. 

This is a react application using vite that includes an express subfolder for managing  API requests. The API fetches data from a Google Sheet, which is then processed and used by the client.

## 🚀 Features
- **React Frontend**: Built using React and Vite for fast development and production builds.
- **Google Sheet Integration**: The API fetches and processes data from a Google Sheet.
- **API Integration**: Includes an API in the api subdirectory to handle data retrieval and preprocessing.
- **Automation**: Automates the API lifecycle during key operations like development and build.

## 🛠️ Scripts
Below are the key npm scripts available in the project:

### General
- `dev`: Starts the Vite development server.
- `build`: Builds the React app for production.
- `preview`: Serves the production build locally.

### API and Data Fetching
- `start-api`: Starts the API server located in the api subdirectory.
- `fetch-data`: Runs a script (scripts/fetchAndSave.js) to fetch data from the API (Google Sheet) and save it  locally.
- `stop-api`: Stops the API server by killing the process running on port 3001.
- `start-api-fetch-data`: Starts the API, waits for it to initialize, fetches data from the Google Sheet, and then stops the API.

### Automation
- `predev`: Runs start-api-fetch-data before starting the development server.
- `prebuild`: Runs start-api-fetch-data before building the application.


## Installation
Clone the repository:

```bash
git clone https://github.com/ellarekow/Project2070.git
cd <project-folder>
```
Ensure you have provided a value for SPREADSHEET_ID and SHEET_NAME in `api/.env`, and a valid set of google credentials in `api/service-account.json`

Then, install dependencies in the and the react cliet:

```bash
npm run install-api
npm install
```


## 🏗️ Usage
### Development
Start the development server:

```bash
npm run dev
```
This will:

- Start the API server.
- Fetch data from the Google Sheet.
- Write it to data.json in the client root
- Stop the API server.
- Launch the Vite development server.

### Production Build
Generate a production build of the app:

```bash
npm run build
```
This will:

- Start the API server.
- Fetch data from the Google Sheet.
- Write it to data.json in the client root
- Stop the API server.
- Launch the Vite development server.
