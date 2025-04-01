import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        py: 2,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
