import React, { useState } from "react";
import Papa from "papaparse";

const CSVUploader = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        const cleanedData = result.data.map((row) => ({
          Manufacturer: row.Manufacturer?.trim() || "Unknown",
          Model: row.Model?.trim() || "Unknown",
          Year: row.Year?.trim() || "Unknown",
        }));
        console.log("Uploaded Cleaned Data: ", cleanedData);
        setData(cleanedData);
      },
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} accept=".csv" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CSVUploader;
