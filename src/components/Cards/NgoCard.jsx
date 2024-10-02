import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
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
  return (
    <>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 1,
          borderRadius: "20px",
          position: "relative",
          height: "450px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "200px",
            width: "100%",
            borderRadius: "12px",
          }}
        >
          <Image
            src="/images/ngo.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
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
              WebkitLineClamp: "4",
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
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
            onClick={() => setShow(!show)}
          >
            <Add />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            height: "450px",
            width: "100%",
            bgcolor: color,
            borderRadius: "20px",
            top: 0,
            left: 0,
            display: !show && "none",
          }}
        ></Box>
      </Box>
    </>
  );
};
