import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export const NgoCard = ({ color }) => {
  const [show, setShow] = useState(false);
  const text = `Prosperity for Humanity, as defined for an NGO, embodies a holistic vision of well-being that integrates economic, social, and
            environmental dimensions. It seeks to create conditions where
            individuals and communities thrive through access to fair wages,
            sustainable livelihoods, and educational opportunities. Key aspects
            include promoting social equity, protecting natural resources, and
            empowering communities to make informed decisions. Additionally, it
            values cultural diversity and fosters intercultural understanding.
            By addressing these interconnected areas, an NGO can work towards a
            more equitable and sustainable future, ensuring that progress
            benefits everyone and enhances overall quality of life.`;

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
        }}
        variant="outlined"
      >
        <CardMedia
          sx={{ height: 200 }}
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
                zIndex: 100,
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
          ></Box>
        </CardContent>
      </Card>
    </>
  );
};
