import fs from 'fs';

const TARGET_FILE = 'data.json';  // saved at the root
const API_URL = 'http://localhost:3001';
async function fetchData() {
  try {
    const response = await fetch(API_URL);
    if (response.ok){
      const data = await response.json();
      console.log('Fetched data with length', data.length);
      fs.writeFileSync(TARGET_FILE, JSON.stringify(data, null, 2));
      console.log(`Data saved to ${TARGET_FILE}`);
    } else { 
      throw new Error("Something is amiss.....", response.statusText);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
