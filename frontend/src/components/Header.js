import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function ButtonAppBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login")
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          BK High School
        </Typography>
        <Button color="inherit" onClick = {() => handleLogout()}
         >Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
