import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import SidebarR from "./components/sidebar/SidebarR";
import Dashboard from "./components/dashboard/Dashboard";
import KanbanView from "./components/Kanban/KanbanView";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <Box bgcolor="#f8f8f8">
      <Navbar onMenuClick={() => setMobileOpen(true)} />
      <Box display="flex">
        <SidebarR
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        <Box
          component="main"
          sx={{
            ml: 0,
            flexGrow: 1,
            flex: 1,
            p: 0,
            minWidth: 0, // VERY IMPORTANT
          }}
        >
          <KanbanView />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
