import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const TidesCard = () => {
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
        background: "linear-gradient(to bottom, #0a06f4, #4c49ed )",
      }}
    >
      {/* Foreground content */}
      <CardContent
        sx={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
        }}
      >
        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography
                variant="body2"
                fontSize="small"
                sx={{ opacity: "70%" }}
              >
                Condition :
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Low tides
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="body2"
                fontSize="small"
                sx={{ opacity: "70%" }}
              >
                From
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                26/Jan
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="body2"
                fontSize="small"
                sx={{ opacity: "70%" }}
              >
                To
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                03/Feb
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography
                variant="body2"
                fontSize="small"
                sx={{ opacity: "70%" }}
              >
                Expecting :
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                High tides
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="body2"
                fontSize="small"
                sx={{ opacity: "70%" }}
              >
                From
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                26/Jan
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="body2"
                fontSize="small"
                sx={{ opacity: "70%" }}
              >
                To
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                03/Feb
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body2"
              fontSize="small"
              sx={{ opacity: "70%" }}
            >
              Tidal Coefficient
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="body2"
                fontSize="small"
                sx={{ opacity: "70%" }}
              >
                0
              </Typography>
              <Box width="80%" height="30px" bgcolor="#ecebeb">
                <Box width="30%" height="30px" bgcolor="#ffff4c"></Box>
              </Box>
              <Typography
                variant="body2"
                fontSize="small"
                sx={{ opacity: "70%" }}
              >
                120
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TidesCard;
