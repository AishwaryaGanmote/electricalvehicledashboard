// src/components/SummaryCard.js
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import "../App.css";

const SummaryCard = ({ title, value }) => (
    <Card className="summary-card" sx={{ ":hover": { boxShadow: 6 }, transition: "box-shadow 0.3s ease-in-out" }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" color="secondary.main">{value}</Typography>
      </CardContent>
    </Card>
  );
  
export default SummaryCard;
