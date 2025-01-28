import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import sheetData from "../data.json";
import "./App.css";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

function App() {
	const [data, setData] = useState(sheetData); // setData could now be used to filter results
	const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

	const headings = data.reduce((acc, row) => {
		return Object.keys(row).reduce((acc, key) => {
			if (!acc.includes(key)) acc.push(key);
			return acc;
		}, acc);
	}, []);

	const handleSort = (key) => {
		let direction = "asc";
		if (sortConfig.key === key && sortConfig.direction === "asc") {
			direction = "desc";
		}
		setSortConfig({ key, direction });
	};

	const sortedData = React.useMemo(() => {
		if (!sortConfig.key) return data;

		return [...data].sort((a, b) => {
			if (a[sortConfig.key] < b[sortConfig.key]) {
				return sortConfig.direction === "asc" ? -1 : 1;
			}
			if (a[sortConfig.key] > b[sortConfig.key]) {
				return sortConfig.direction === "asc" ? 1 : -1;
			}
			return 0;
		});
	}, [data, sortConfig]);

	const getSortIcon = (key) => {
		if (sortConfig.key !== key) return <FaSort />;
		return sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
	};

	return (
		<>
			<div>
				<h1>Look, its Data from GSheets!</h1>
			</div>
			<div>
				<Table striped bordered hover responsive variant="dark">
					<thead>
						<tr>
							{headings.map((heading) => (
								<th
									key={heading}
									onClick={() => handleSort(heading)}
									style={{ cursor: "pointer" }}
								>
									{heading} {getSortIcon(heading)}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{sortedData.map((row, idx) => (
							<tr key={idx}>
								{headings.map((heading) => (
									<td key={heading}>{row[heading]}</td>
								))}
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</>
	);
}

export default App;
