import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          mt: -1,
          mx: -1,
          // borderBottom: "0.5px solid #88888870",
          bgcolor: "rgba(245, 245, 247, .72)",
          backdropFilter: "saturate(180%) blur(20px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Header />
      </Box>
      {children}
    </>
  );
};
