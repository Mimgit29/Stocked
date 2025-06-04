import fs from 'fs';
import csv from 'csv-parser';

export function getStockandNameFromCSV() {
  return new Promise((resolve, reject) => {
    const stocks = [];

    fs.createReadStream('6month.csv')
      .pipe(csv())
      .on('data', (row) => {
        const name = row['Stock Name'] || Object.values(row)[1];
        const symbol = row['Symbol'] || Object.values(row)[2];

        if (name && symbol) {
          stocks.push({ stockName: name.trim(), stock: symbol.trim() });
          
        }
    
      })
      .on('end', () => {
        resolve(stocks);
      })
      .on('error', (error) => {
        reject(error);
      });
    
  });
}

