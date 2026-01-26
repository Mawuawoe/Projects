import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import WeatherCard from "./WeatherCard";
import TidesCard from "./TidesCard";
import ExtraWeatherCard from "./ExtraWeatherCard";
import MapCard from "./MapCard";

const Dashboard = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <WeatherCard />
        <ExtraWeatherCard />
        <TidesCard />
      </Stack>
      <MapCard />
    </Stack>
  );
};

export default Dashboard;
