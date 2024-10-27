import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Charts = ({ data }) => {
    // Log the incoming data to ensure it's correct
    console.log("Data Passed to Charts: ", data);
  
    // Calculate manufacturer data for BarChart
    const manufacturerData = data.reduce((acc, item) => {
      acc[item.Manufacturer] = (acc[item.Manufacturer] || 0) + 1;
      return acc;
    }, {});
  
    const barData = Object.keys(manufacturerData).map((key) => ({
      name: key,
      count: manufacturerData[key],
    }));
  
    // Log barData to see if it's populated correctly
    console.log("Bar Data: ", barData);
  
    const yearlyData = data.reduce((acc, item) => {
        const year = Number(item.Year); // Convert to a number
        console.log("Processing year: ", year); // Log each year being processed
        if (!isNaN(year)) {
          acc[year] = (acc[year] || 0) + 1;
        }
        return acc;
      }, {});
      
  
  console.log("Yearly Data: ", yearlyData); // Log yearly data
  
  // Convert the yearly data to an array for the LineChart
  const lineData = Object.keys(yearlyData)
    .map((year) => ({
      year: year,
      count: yearlyData[year],
    }))
    .sort((a, b) => a.year - b.year); // Sort by year
  
  console.log("Line Data Length: ", lineData.length); // Check length
  console.log("Line Data: ", lineData); // Log line data
  

 

  // Define color palette for PieChart
  const COLORS = ["#2e7d32", "#4caf50", "#81c784", "#aed581"];

  return (
    <Grid container spacing={4} className="chart-container" style={{ marginTop: "50px" }}>
      <Grid item xs={12} md={6}>
        <Box className="chart-box">
          <Typography variant="h6" className="chart-title">EVs by Manufacturer</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#2e7d32" animationDuration={800} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box className="chart-box">
          <Typography variant="h6" className="chart-title">Market Share</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={barData} dataKey="count" cx="50%" cy="50%" outerRadius={80}>
                {barData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Grid>

     
    </Grid>
  );
};

export default Charts;
