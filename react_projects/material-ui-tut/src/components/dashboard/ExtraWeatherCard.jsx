import { Box, Card, CardContent } from "@mui/material";
import React from "react";

const ExtraWeatherCard = () => {
  return (
    <Card
      elevation={4} // soft shadow
      sx={{
        height: { xs: 160, sm: 180, md: 200 },
        position: "relative",
        overflow: "hidden",
        width: "100%",
        borderRadius: "25px",
        border: "none", // removes edge line
        background: "linear-gradient(to bottom, #957dcd, #523d7f)",
      }}
    >
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

export default ExtraWeatherCard;
