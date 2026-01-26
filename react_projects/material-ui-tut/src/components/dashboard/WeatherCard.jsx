import React from "react";
import weatherbg from "../../assets/weatherbg.svg";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

const WeatherCard = () => {
  return (
    <Card
      elevation={4}
      sx={{
        height: { xs: 160, sm: 180, md: 200 },
        width: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: "25px",
        bgcolor: "#121111",
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
          src={weatherbg}
          alt="Weather background"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Foreground content */}
      <Stack spacing={-4}>
        <Stack spacing={-4}>
          <CardContent
            sx={{
              position: "relative",
              zIndex: 1,
              color: "white",
            }}
          >
            <Typography variant="h5">Monday</Typography>
          </CardContent>
          <CardContent
            sx={{
              position: "relative",
              zIndex: 1,
              color: "white",
            }}
          >
            <Typography variant="body2">26 Jan 2026</Typography>
          </CardContent>
        </Stack>

        <CardContent
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          <Typography variant="h3">11:07am</Typography>
        </CardContent>

        <CardContent
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          <Stack spacing={0}>
            <Typography>Sunny</Typography>
            <Stack direction="row" spacing={0} alignContent="end">
              <LocationOn />
              <Typography variant="body2">Sege</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default WeatherCard;
