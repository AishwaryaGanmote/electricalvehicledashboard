
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

const Header = ({ title }) => (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h5" color="inherit">{title}</Typography>
      </Toolbar>
    </AppBar>
  );

export default Header;
