import { Box, Card, CardContent } from "@mui/material";
import React from "react";

const MapCard = () => {
  return (
    <Card
      elevation={4}
      sx={{
        height: { xs: 280, sm: 360, md: 480 },
        position: "relative",
        width: "100%",
        border: "none",
        borderRadius: "25px",
      }}
    >
      {/* SVG background layer */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Foreground content */}
      <CardContent
        sx={{
          position: "relative",
          zIndex: 1,
          color: "#333",
        }}
      >
        Weather content
      </CardContent>
    </Card>
  );
};

export default MapCard;
