import React from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SidebarList from "./SidebarList";

const MobileSidebar = ({ open, onClose }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{ display: { xs: "block", sm: "none" } }}
    >
      <Box width={240} p={2}>
        <SidebarList />
      </Box>
    </Drawer>
  );
};

export default MobileSidebar;
