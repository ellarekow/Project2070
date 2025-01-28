import { useState } from "react";
import sheetData from "../data.json";
import "./App.css";

function App() {
  const [data, setData] = useState(sheetData); // setData could now be used to filter results

  const headings = data.reduce((acc, row) => {
    return Object.keys(row).reduce((acc, key) => {
      if (!acc.includes(key)) acc.push(key);
      return acc;
    }, acc);
  }, [])


  return (
    <>
      <div>
        <h1>Look, its Data from GSheets!</h1>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              {headings.map(heading => <th key={heading}>{heading}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {headings.map(heading => <td key={heading}>{row[heading]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
