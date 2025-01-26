
const commaSeparatedValue = /tags/i
const semicolonSeparated = /locations/i

const ignoreEmpty = (value) => value !== '';

const maybeSplitCell = (cell, head) => {
  // if the header maches the comma separation regex, split the cell by semicolon
  if (commaSeparatedValue.test(head)) {
    return cell.split(',').map(tag => tag.trim()).filter(ignoreEmpty);
  }
  // if the header maches the semicolon separation regex, split the cell by semicolon
  if (semicolonSeparated.test(head)) {
    return cell.split(';').map(location => location.trim()).filter(ignoreEmpty);
  }
  return cell;
}

const rowToObjectArray = (heads, row) => {
  return row.reduce((acc, cell, idx) => {
    const value = maybeSplitCell(cell, heads[idx]);
    acc[heads[idx]] = value;
    return acc;
  }, {});
};

 function transformSheet(sheetData) {
  const [headers, ...rows] = sheetData;
  return rows.map(row => rowToObjectArray(headers, row))
}

module.exports = transformSheet;