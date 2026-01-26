import {
  AccountBox,
  Article,
  Cloud,
  FileUpload,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Splitscreen,
  Storefront,
  Tsunami,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const SidebarList = () => {
  return (
    <List>
      {[
        { text: "Homepage", icon: <Home /> },
        { text: "All Reports", icon: <Article /> },
        { text: "Upload Data", icon: <FileUpload /> },
        { text: "Weather", icon: <Cloud /> },
        { text: "Tides", icon: <Tsunami /> },
        { text: "Task Manager", icon: <Splitscreen /> },
        { text: "Settings", icon: <Settings /> },
        { text: "Profile", icon: <AccountBox /> },
      ].map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton>
            <ListItemIcon
              sx={{
                minWidth: { sm: "auto", md: 40 },
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>

            {/* 👇 text only shows on desktop */}
            <ListItemText
              primary={item.text}
              sx={{ display: { sm: "none", md: "block" } }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarList;
