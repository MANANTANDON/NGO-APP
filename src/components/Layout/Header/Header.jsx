import { ArrowDropDownRounded, Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Grid2,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export const Header = () => {
  const handleDelete = () => {};
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mx: { xs: -1, md: -1 }, py: 1.1 }}>
          <Grid2 container>
            <Grid2 item size={{ xs: 6, md: 3 }} sx={{ margin: "auto" }}>
              <Typography>NGO APP</Typography>
            </Grid2>
            <Grid2
              item
              sx={{
                display: { xs: "none", md: "flex" },
                margin: "auto",
              }}
              size={{ xs: 12, md: 6 }}
            >
              <Paper
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  pl: 1.2,
                }}
              >
                <InputBase fullWidth placeholder="explore ngos...." />
                <IconButton>
                  <Search />
                </IconButton>
              </Paper>
            </Grid2>
            <Grid2
              item
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "auto",
              }}
              size={{ xs: 6, md: 3 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  border: "0.5px solid #88888870",
                  p: 0.5,
                  borderRadius: "100px",
                }}
              >
                <Avatar
                  sx={{ height: 40, width: 40 }}
                  src="/images/shynu.jpg"
                />
                <Typography sx={{ display: "none" }}>4d616e616e</Typography>
                <ArrowDropDownRounded
                  sx={{ "&:hover": { color: "#88888870", cursor: "pointer" } }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
};
