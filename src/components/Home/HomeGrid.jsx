import { Explore, ExploreRounded } from "@mui/icons-material";
import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { NgoCard } from "../Cards/NgoCard";

export const HomeGrid = () => {
  const colors = [
    "rgb(250, 36, 60)",
    "rgb(221, 4, 209)",
    "rgb(233, 75, 27)",
    "rgb(20, 177, 161)",
    "rgb(14, 144, 219)",
    "rgb(34, 148, 177)",
  ];

  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <Grid2 container>
        <Grid2
          item
          size={{ xs: 12, md: 2.5 }}
          sx={{
            px: 2,
            display: { xs: "none", md: "block" },
            position: "sticky",
            top: 81, // Adjust based on your layout
            height: "85vh",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              p: 2,
              bgcolor: "white",
              height: "100%",
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{
                border: "2px solid rgb(19,32,48)",
                bgcolor: "rgb(19,32,48)",
                color: "white",
                p: 1.5,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ExploreRounded /> Feed
            </Typography>
          </Box>
        </Grid2>
        <Grid2
          item
          size={{ xs: 12, md: 7 }}
          sx={{
            px: { xs: 0, md: 2 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography fontSize="35px" fontWeight="bolder">
            <Explore /> Feed
          </Typography>
          {Array.from(Array(6)).map((item, key) => (
            <div key={item}>
              <NgoCard color={colors[key]} />
            </div>
          ))}
        </Grid2>
        <Grid2
          item
          size={{ xs: 12, md: 2.5 }}
          sx={{
            px: 2,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 2,
            position: "sticky",
            top: 81, // Adjust based on your layout
            height: "85vh",
            overflowY: "auto",
          }}
        >
          <Box sx={{ p: 2, bgcolor: "#fff", height: "100%" }}>
            <Typography>More NGOs</Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};
