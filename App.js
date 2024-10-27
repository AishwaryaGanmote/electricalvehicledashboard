import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Papa from "papaparse";
import { Container, Typography, Box, Grid } from "@mui/material";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import Charts from "./components/Charts";
import DataTable from "./components/DataTable";
import CSVUploader from "./CSVUploader"; // Import CSVUploader here
import "./App.css";

const theme = createTheme({
  palette: {
    primary: { main: "#2e7d32" },
    secondary: { main: "#ffeb3b" },
    background: { default: "#f4f6f8" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h5: { fontWeight: 600 },
    h6: { fontWeight: 500 },
  },
});


function App() {
  const [data, setData] = useState([]);
  const [latestYear, setLatestYear] = useState("N/A");
  const [topManufacturer, setTopManufacturer] = useState("N/A");
  const [topModel, setTopModel] = useState("N/A");

    useEffect(() => {
      Papa.parse("http://localhost:3000/ev_data.csv", {
        download: true,
        header: true,
        complete: (result) => {
          const cleanedData = result.data.map((row) => ({
            Manufacturer: row.Manufacturer?.trim() || "Unknown",
            Model: row.Model?.trim() || "Unknown",
            Year: row.Year?.trim() || "Unknown",
          }));
          console.log("Cleaned Data After Parsing: ", cleanedData);
          setData(cleanedData);
        },
      });
    }, []);
    

  
  return (
    <ThemeProvider theme={theme}>
    <Container className="containers">
      <Header title="Electric Vehicle Analytics Dashboard" />
      <CSVUploader /> {/* Added CSVUploader here */}
      
      <Charts data={data} />
      <DataTable data={data} />
    </Container>
  </ThemeProvider>
  );
}

export default App;
