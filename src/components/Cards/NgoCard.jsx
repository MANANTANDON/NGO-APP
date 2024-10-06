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

export const NgoCard = ({ color }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Card
        sx={{
          my: 1,
          borderRadius: "20px",
          position: "relative",
          mx: { xs: -1, md: 0 },
        }}
        variant="outlined"
      >
        <CardMedia
          sx={{ height: 250 }}
          image="/images/ngo.png"
          title="NGO IMAGE"
        />
        <CardContent
          sx={{
            padding: 0,
            "&: last-child": {
              padding: 0,
            },
          }}
        >
          <Box sx={{ my: 1, px: 2 }}>
            <Typography fontSize="12px" fontWeight="700" sx={{ color: color }}>
              Community Development
            </Typography>
          </Box>
          <Box sx={{ px: 2 }}>
            <Typography fontSize="25px" fontWeight="bold" sx={{ my: 1 }}>
              Prosperity For Humanity
            </Typography>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
              }}
              fontSize="14px"
            >
              {text}
            </Typography>
          </Box>
          <Box
            sx={{
              px: 2,
              py: 1.5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2.2,
            }}
          >
            <Button
              sx={{
                bgcolor: "rgb(19,32,48)",
                color: "#fff",
                borderRadius: "10px",
                px: 4,
              }}
            >
              Know More
            </Button>
            <Box
              sx={{
                bgcolor: "rgb(19,32,48)",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                p: 0.2,
                zIndex: 1,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              className={show ? "crossCircleRotate" : "crossCircle"}
              onClick={handleShow}
            >
              <Add />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              bgcolor: color,
              borderRadius: "20px",
              top: 0,
              left: 0,
            }}
            className={`fade-box ${show ? "fade-in" : "fade-out"}`}
          >
            <Typography sx={{ color: "#fff", p: 4 }}>
              Chicky Check Microphone Check 1, Microphone Check 2, Microphone
              Check 3.... DRE DAY.... You can check sounds from NATE DOGG
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
