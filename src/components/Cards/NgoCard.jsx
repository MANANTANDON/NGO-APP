import { text } from "@/constant/testData";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import NgoCardStyles from "@/styles/NgoCards.module.css";

export const NgoCard = ({ color }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Card className={NgoCardStyles.ngoc1} variant="outlined">
        <CardMedia
          className={NgoCardStyles.ngoc2}
          image="/images/ngo.png"
          title="NGO IMAGE"
        />
        <CardContent className={NgoCardStyles.ngoc3}>
          <Box sx={{ my: 1 }} px={2}>
            <Typography fontSize="12px" fontWeight="700" sx={{ color: color }}>
              Community Development
            </Typography>
          </Box>
          <Box px={2}>
            <Typography fontSize="25px" fontWeight="bold" sx={{ my: 1 }}>
              Prosperity For Humanity
            </Typography>
            <Typography className={NgoCardStyles.ngoc4} fontSize="14px">
              {text}
            </Typography>
          </Box>
          <Box className={NgoCardStyles.ngoc5} px={2} py={1.5}>
            <Button className={NgoCardStyles.ngoc6}>Know More</Button>
            <Box
              p={0.2}
              className={`${NgoCardStyles.ngoc7} ${
                show ? NgoCardStyles.ngoc8 : NgoCardStyles.ngoc9
              }`}
              onClick={handleShow}
            >
              <Add />
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: color,
            }}
            className={`${NgoCardStyles.ngoc10} fade-box ${
              show ? "fade-in" : "fade-out"
            }`}
          ></Box>
        </CardContent>
      </Card>
    </>
  );
};
