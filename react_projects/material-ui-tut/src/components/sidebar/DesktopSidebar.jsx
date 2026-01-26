import { Box } from "@mui/material";
import React from "react";
import SidebarList from "./SidebarList";

const DesktopSidebar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        flexShrink: 0,
        width: {
          sm: 72, // tablet → icon-style sidebar
          md: 200, // desktop → full sidebar
        },
      }}
    >
      <Box
        sx={{
          position: "fixed",
          height: "100vh",
          width: {
            sm: 60,
            md: 200,
          },
          bgcolor: "#ffffff",
          p: { sm: 1, md: 2 },
          transition: "width 0.3s ease",
        }}
      >
        <SidebarList />
      </Box>
    </Box>
  );
};

export default DesktopSidebar;
