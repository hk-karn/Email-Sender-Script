const xlsx = require('xlsx');

const getDataFromExcel = () => {
  const workbook = xlsx.readFile('./data/list.xlsx');
  const sheetName = 'TestSheet';
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet);
};

module.exports = { getDataFromExcel };
